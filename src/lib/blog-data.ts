"use client";

export const blogPosts = [
	{
		slug: "frontend/react/hooks",
		title: "Understanding React Hooks",
		excerpt:
			"A comprehensive guide to React hooks and how to use them effectively in your applications.",
		content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components.</p>
      
      <h3>useState Hook</h3>
      <p>The useState hook allows you to add state to functional components:</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      
      <h3>useEffect Hook</h3>
      <p>The useEffect hook lets you perform side effects in functional components:</p>
      <pre><code>useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);</code></pre>
      
      <h3>Custom Hooks</h3>
      <p>You can create your own hooks to reuse stateful logic between components.</p>
    `,
		category: "Frontend",
		date: "Dec 15, 2024",
	},
	{
		slug: "frontend/react/components",
		title: "Building Reusable Components",
		excerpt:
			"Learn how to create flexible and reusable React components that scale with your application.",
		content: `
      <h2>Component Design Principles</h2>
      <p>Building reusable components is essential for maintaining a scalable React application.</p>
      
      <h3>Props Interface</h3>
      <p>Always define clear prop interfaces for your components:</p>
      <pre><code>interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}</code></pre>
      
      <h3>Composition over Inheritance</h3>
      <p>React favors composition over inheritance. Use children props and render props patterns.</p>
      
      <h3>Testing Components</h3>
      <p>Write tests for your components to ensure they work as expected across different scenarios.</p>
    `,
		category: "Frontend",
		date: "Dec 12, 2024",
	},
	{
		slug: "frontend/css/flexbox",
		title: "Mastering CSS Flexbox",
		excerpt:
			"Everything you need to know about CSS Flexbox for creating flexible and responsive layouts.",
		content: `
      <h2>Flexbox Fundamentals</h2>
      <p>CSS Flexbox is a powerful layout method that makes it easy to design flexible and responsive layouts.</p>
      
      <h3>Flex Container Properties</h3>
      <ul>
        <li><strong>display: flex</strong> - Creates a flex container</li>
        <li><strong>flex-direction</strong> - Defines the main axis</li>
        <li><strong>justify-content</strong> - Aligns items along the main axis</li>
        <li><strong>align-items</strong> - Aligns items along the cross axis</li>
      </ul>
      
      <h3>Flex Item Properties</h3>
      <ul>
        <li><strong>flex-grow</strong> - How much an item should grow</li>
        <li><strong>flex-shrink</strong> - How much an item should shrink</li>
        <li><strong>flex-basis</strong> - The initial size of an item</li>
      </ul>
    `,
		category: "Frontend",
		date: "Dec 10, 2024",
	},
	{
		slug: "backend/nodejs/mocking",
		title: "Mocking in Node.js Testing",
		excerpt:
			"Learn how to effectively mock dependencies and external services in your Node.js applications for better testing.",
		content: `
    <h2>Introduction to Mocking</h2>
    <p>Mocking is a crucial technique in testing that allows you to replace dependencies with controlled implementations.</p>
    
    <h3>Why Mock?</h3>
    <ul>
      <li>Isolate the code under test</li>
      <li>Control external dependencies</li>
      <li>Make tests faster and more reliable</li>
      <li>Test error scenarios safely</li>
    </ul>
    
    <h3>Jest Mocking</h3>
    <pre><code>// Mock a module
jest.mock('./database');

// Mock a function
const mockFn = jest.fn();
mockFn.mockReturnValue('mocked result');

// Mock implementation
mockFn.mockImplementation(() => {
  return 'custom implementation';
});</code></pre>
    
    <h3>Mocking HTTP Requests</h3>
    <p>Use libraries like nock or msw to mock HTTP requests:</p>
    <pre><code>const nock = require('nock');

nock('https://api.example.com')
  .get('/users')
  .reply(200, { users: [] });</code></pre>
    
    <h3>Best Practices</h3>
    <ul>
      <li>Mock at the boundary of your system</li>
      <li>Keep mocks simple and focused</li>
      <li>Reset mocks between tests</li>
      <li>Verify mock interactions when needed</li>
    </ul>
  `,
		category: "Backend",
		date: "Dec 8, 2024",
	},
	{
		slug: "backend/nodejs/apis",
		title: "Building RESTful APIs",
		excerpt:
			"A complete guide to building RESTful APIs with Node.js, including best practices and security considerations.",
		content: `
      <h2>RESTful API Design</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications.</p>
      
      <h3>HTTP Methods</h3>
      <ul>
        <li><strong>GET</strong> - Retrieve data</li>
        <li><strong>POST</strong> - Create new data</li>
        <li><strong>PUT</strong> - Update existing data</li>
        <li><strong>DELETE</strong> - Remove data</li>
      </ul>
      
      <h3>Status Codes</h3>
      <p>Use appropriate HTTP status codes to indicate the result of API operations:</p>
      <ul>
        <li>200 - OK</li>
        <li>201 - Created</li>
        <li>400 - Bad Request</li>
        <li>404 - Not Found</li>
        <li>500 - Internal Server Error</li>
      </ul>
      
      <h3>Error Handling</h3>
      <p>Implement proper error handling and return meaningful error messages to clients.</p>
    `,
		category: "Backend",
		date: "Dec 5, 2024",
	},
];

export const blogStructure = [
	{
		name: "Frontend",
		type: "folder",
		children: [
			{
				name: "React",
				type: "folder",
				children: [
					{
						title: "Understanding React Hooks",
						slug: "frontend/react/hooks",
						type: "file",
					},
					{
						title: "Building Reusable Components",
						slug: "frontend/react/components",
						type: "file",
					},
				],
			},
			{
				name: "CSS",
				type: "folder",
				children: [
					{
						title: "Mastering CSS Flexbox",
						slug: "frontend/css/flexbox",
						type: "file",
					},
				],
			},
		],
	},
	{
		name: "Backend",
		type: "folder",
		children: [
			{
				name: "Node.js",
				type: "folder",
				children: [
					{
						title: "Mocking in Node.js Testing",
						slug: "backend/nodejs/mocking",
						type: "file",
					},
					{
						title: "Building RESTful APIs",
						slug: "backend/nodejs/apis",
						type: "file",
					},
				],
			},
		],
	},
];
