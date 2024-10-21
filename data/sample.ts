export const sections = [
  {
    groupName: 'Getting Started',
    pageName: 'Introduction',
    pageSlug: 'introduction',
    title: 'Introduction to the API',
    slug: 'introduction-to-the-api',
    content:
      'Introduction to the API\n\nWelcome to the API documentation for our project. This guide will help you get started with understanding and using the API effectively.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Introduction',
    pageSlug: 'introduction',
    title: 'Overview',
    slug: 'overview',
    content:
      "Overview\n\nOur API provides a robust set of endpoints that allow you to interact with various features of our application. Whether you're looking to manage tasks, retrieve data, or perform complex queries, our API is designed to be flexible and easy to use.\n\n",
  },
  {
    groupName: 'Getting Started',
    pageName: 'Introduction',
    pageSlug: 'introduction',
    title: 'Getting Started',
    slug: 'getting-started',
    content:
      "Getting Started\n\nTo begin using the API, you'll need to set up a project and install the necessary dependencies. If you haven't already, you can create a new project using the following command:\n\n\n",
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Weather API',
    slug: 'weather-api',
    content:
      'Weather API\n\nThe Update Todo List endpoint allows you to update an existing task or multiple tasks within a todo list. This endpoint provides flexibility to change the task name, description, due date, or completion status.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Introduction',
    slug: 'introduction',
    content:
      'Introduction\n\nIn any productive workflow, managing tasks is crucial. The Update Todo List endpoint offers a powerful tool to modify existing tasks in a todo list. Whether you need to change the task name, update the description, reschedule the due date, or update the completion status, this endpoint caters to your task management requirements efficiently.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Endpoint',
    slug: 'endpoint',
    content:
      'Endpoint\n\nThe Update Todo List endpoint URL is:\n\n```\nPUT /api/todo-list/:id\n```\n\nReplace `:id` with the unique identifier of the todo list or task you want to update.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'HTTP Method',
    slug: 'http-method',
    content:
      'HTTP Method\n\nThe Update Todo List endpoint uses the HTTP PUT method to perform updates on the todo list.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Parameters',
    slug: 'parameters',
    content:
      'Parameters\n\nThe endpoint requires the following parameters:\n\n- `id` (required): The unique identifier of the todo list or task you want to update.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Request Headers',
    slug: 'request-headers',
    content:
      'Request Headers\n\nThe endpoint requires the following request header:\n\n- `Content-Type`: Use `application/json` for the request body.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Request Body',
    slug: 'request-body',
    content:
      'Request Body\n\nThe request body must be a JSON object containing the updated properties of the task(s) within the todo list. The properties that can be updated include:\n\n- `name` (optional): The new name of the task.\n- `description` (optional): The updated description of the task.\n- `dueDate` (optional): The new due date of the task.\n- `completed` (optional): The updated completion status of the task (`true` or `false`).\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Response',
    slug: 'response',
    content:
      'Response\n\nThe Update Todo List endpoint returns a JSON object representing the updated task(s) within the todo list. The response includes the following properties:\n\n- `id`: The unique identifier of the updated task.\n- `name`: The name of the task.\n- `description`: The description of the task.\n- `dueDate`: The due date of the task.\n- `completed`: The completion status of the task.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Error Handling',
    slug: 'error-handling',
    content:
      'Error Handling\n\nThe Update Todo List endpoint can return the following error responses:\n\n- `400 Bad Request`: Indicates that the request was malformed or missing required parameters.\n- `401 Unauthorized`: Indicates that authentication is required to update the task(s) within the todo list.\n- `404 Not Found`: Indicates that the specified todo list or task does not exist.\n- `500 Internal Server Error`: Indicates a server-side error occurred.\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Examples',
    slug: 'examples',
    content:
      'Examples\n\n### Example 1: Update a Single Task\n\n**Request:**\n\n```\nPUT /api/todo-list/1234567890\nContent-Type: application/json\n\n{\n  "name": "Update Documentation",\n  "description": "Generate extensive Markdown documentation for an endpoint",\n  "dueDate": "2023-09-30",\n  "completed": true\n}\n```\n\n**Response:**\n\n```\n200 OK\nContent-Type: application/json\n\n{\n  "id": "1234567890",\n  "name": "Update Documentation",\n  "description": "Generate extensive Markdown documentation for an endpoint",\n  "dueDate": "2023-09-30",\n  "completed": true\n}\n```\n\n### Example 2: Update Multiple Tasks\n\n**Request:**\n\n```\nPUT /api/todo-list/987654321\nContent-Type: application/json\n\n[\n  {\n    "id": "task1",\n    "name": "Update Documentation",\n    "description": "Generate extensive Markdown documentation for an endpoint",\n    "dueDate": "2023-09-30",\n    "completed": true\n  },\n  {\n    "id": "task2",\n    "name": "Fix Bug",\n    "dueDate": "2023-10-10",\n    "completed": false\n  }\n]\n```\n\n**Response:**\n\n```json\n200 OK\nContent-Type: application/json\n\n[\n  {\n    "id": "task1",\n    "name": "Update Documentation",\n    "description": "Generate extensive Markdown documentation for an endpoint",\n    "dueDate": "2023-09-30",\n    "completed": true\n  },\n  {\n    "id": "task2",\n    "name": "Fix Bug",\n    "dueDate": "2023-10-10",\n    "completed": false\n  }\n]\n```\n\n',
  },
  {
    groupName: 'Getting Started',
    pageName: 'Weather',
    pageSlug: 'weather',
    title: 'Conclusion',
    slug: 'conclusion',
    content:
      'Conclusion\n\nThe Update Todo List endpoint provides powerful functionality to modify existing tasks within a todo list. With the ability to update task details such as name, description, due date, and completion status, you can easily manage and track your tasks efficiently.\n',
  },
  {
    groupName: 'API',
    pageName: '[Get] Item',
    pageSlug: 'api-item',
    title: 'Todo List Search API Documentation',
    slug: 'todo-list-search-api-documentation',
    content:
      'Todo List Search API Documentation\n\nThis documentation provides an overview and usage guide for the Todo List Search API. The API allows users to search for todo list items based on various parameters and retrieve the matching items. The API supports multiple programming languages including Python, JavaScript, and PHP.\n\n',
  },
  {
    groupName: 'API',
    pageName: '[Get] Item',
    pageSlug: 'api-item',
    title: 'Authentication',
    slug: 'authentication',
    content:
      'Authentication\n\nThe Todo List Search API does not require authentication. It is open for public use.\n\n',
  },
  {
    groupName: 'API',
    pageName: '[Get] Item',
    pageSlug: 'api-item',
    title: 'API Base URL',
    slug: 'api-base-url',
    content:
      'API Base URL\n\nThe base URL for accessing the Todo List Search API is:\n\n`https://api.example.com/todo-search`\n\n',
  },
  {
    groupName: 'API',
    pageName: '[Get] Item',
    pageSlug: 'api-item',
    title: 'Search Parameters',
    slug: 'search-parameters',
    content:
      'Search Parameters\n\nThe Todo List Search API supports the following search parameters:\n\n- `query` (required): The search query string.\n\n',
  },
  {
    groupName: 'API',
    pageName: '[Get] Item',
    pageSlug: 'api-item',
    title: 'Responses',
    slug: 'responses',
    content:
      'Responses\n\nThe API responds with JSON objects containing the search results. The structure of the response is as follows:\n\n\n```json\n{\n  "results": [\n    {\n      "id": "1",\n      "title": "Sample Todo",\n      "description": "This is a sample todo item.",\n      "due_date": "2022-12-31"\n    },\n    {\n      "id": "2",\n      "title": "Another Todo",\n      "description": "This is another todo item.",\n      "due_date": "2023-01-15"\n    }\n  ]\n}\n```\n\nThe `results` field contains an array of todo list items that match the search criteria. Each todo item object includes an `id`, `title`, `description`, and `due_date`.\n\n',
  },
  {
    groupName: 'API',
    pageName: '[Get] Item',
    pageSlug: 'api-item',
    title: 'Examples',
    slug: 'examples',
    content:
      "Examples\n\nIn any productive workflow, managing tasks is crucial. The Update Todo List endpoint offers a powerful tool to modify existing tasks in a todo list. Whether you need to change the task name, update the description, reschedule the due date, or update the completion status, this endpoint caters to your task management requirements efficiently.\n\n```python\nimport requests\n\n# Define the search query\nquery = 'sample query'\n\n# Construct the API URL\nurl = f\"https://api.example.com/todo-search?query={query}\"\n\n# Send the GET request\nresponse = requests.get(url)\n\n# Parse the JSON response\nresults = response.json()['results']\n\n# Print the results\nfor item in results:\n    print(f\"ID: {item['id']}\")\n    print(f\"Title: {item['title']}\")\n    print(f\"Description: {item['description']}\")\n    print(f\"Due Date: {item['due_date']}\")\n    print()\n```\n\n\n```javascript\nconst query = 'sample query';\n\n// Construct the API URL\nconst url = `https://api.example.com/todo-search?query=${encodeURIComponent(query)}`;\n\n// Send the GET request using Fetch API\nfetch(url)\n  .then(response => response.json())\n  .then(data => {\n    const results = data.results;\n    results.forEach(item => {\n      console.log(`ID: ${item.id}`);\n      console.log(`Title: ${item.title}`);\n      console.log(`Description: ${item.description}`);\n      console.log(`Due Date: ${item.due_date}`);\n      console.log();\n    });\n  })\n  .catch(error => console.error(error));\n```\n\n```php\n<?php\n\n$query = 'sample query';\n\n// Construct the API URL\n$url = 'https://api.example.com/todo-search?query=' . urlencode($query);\n\n// Send the GET request using cURL\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n$response = curl_exec($curl);\ncurl_close($curl);\n\n// Parse the JSON response\n$data = json_decode($response, true);\n\n// Print the results\nforeach ($data['results'] as $item) {\n    echo \"ID: \" . $item['id'] . \"\\n\";\n    echo \"Title: \" . $item['title'] . \"\\n\";\n    echo \"Description: \" . $item['description'] . \"\\n\";\n    echo \"Due Date: \" . $item['due_date'] . \"\\n\\n\";\n}\n```\n\n\n",
  },
  {
    groupName: 'API',
    pageName: '[Get] Item',
    pageSlug: 'api-item',
    title: 'Conclusion',
    slug: 'conclusion',
    content:
      'Conclusion\n\nThis concludes the documentation for the Todo List Search API. The API allows you to search for todo list items based on a query parameter and retrieve the matching results. You can use the provided code examples in Python, JavaScript, and PHP to integrate the API into your applications.\n',
  },
];
