# Homework

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

# Solution

1. To be able to run this app, I used `npx create-react-app notino-react-app --template typescript` as a quickstart, formatting code using airbnb
2. Bugs and issues in App.tsx:
		useEffect fires again and again after each change due to missing an array of dependencies instead of once after first render (componentDidMount)
		calling set state in for loop
		component Todo has no key (tasks mapping)
		repeating definition of Todo type

	Bugs and issues in Todo.tsx:
		shouldComponentUpdate is implemented already in React.PureComponent, it is possible to achieve the same with React.memo or useMemo
		routing implemented by react-router, window.location.href should be absolute, but causes a complete reload
3. Used simple scss import
4. Used Mock API serving dummy JSON in combination with superagent
5. 404 not implemented, redirected to homepage
6. Can be achieved by React.PureComponent which is already implementing shouldComponentUpdate, or by memoization
7. Todo component is stateless and does not use any lifecycle method
