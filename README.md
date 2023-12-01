## headerparser

The Request Header Parser is a simple API built with Node.js and Express that extracts and parses information from HTTP request headers. It provides endpoints to retrieve details such as IP address, preferred languages, software platform, and other relevant metadata from incoming HTTP requests.

[![js-standard-style](https://img.shields.io/badge/style-standard-brightgreen.svg?style=flat)](https://standardjs.com/) &nbsp;
[![Test](https://github.com/zhid0399123/headerparser/actions/workflows/CI.yml/badge.svg)](https://github.com/zhid0399123/headerparser/actions/workflows/CI.yml) &nbsp;
[![Deployment](https://github.com/zhid0399123/headerparser/actions/workflows/fly.yml/badge.svg)](https://github.com/zhid0399123/headerparser/actions/workflows/fly.yml) &nbsp;

## Purpose

The Request Header Parser is designed to assist developers in retrieving and parsing essential client information from request headers, aiding in various use cases such as user analytics, language preferences, and client compatibility detection.

## Features

1. **IP Address**: Obtain the client's IP address from the request headers.
2. **Preferred Languages**: Retrieve the preferred languages set in the client's browser.
3. **Software Platform**: Identify the client's operating system and browser information.
4. **User-Agent Parsing**: Extract user-agent details for detailed device and browser information.

## Usage locally

### 1.0 Installation:

```bash
git clone https://github.com/zhid0399123/headerparser.git
cd headerparser
pnpm install
```

### 2.0 Start the Server:

```bash
npm start
```

The server runs on <a href="http://0.0.0.0:3000/v0/api/headerparser/whoami">http://0.0.0.0:3000/v0/api/headerparser/whoami</a> by default. You can modify the port in your `.env` file

### 3.0 Endpoint:

Send a GET request to `http://0.0.0.0:3000/v0/api/headerparser/whoami` endpoint to retrieve client's IP address, preferred languages, and user-agent information.

Example:

```bash
curl http://0.0.0.0:3000/v0/api/headerparser/whoami
```

Response:

```json
{
  "ipaddress": "159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

## Deployment

The **headerparser** Microservice is deployed and accessible via fly.io, allowing users to interact with the API endpoints. Follow these steps to access the deployed API:

1. **Base URL**: The deployed API can be accessed at [https://headerparser.fly.dev/v0/api/headerparser/whoami](https://headerparser.fly.dev/v0/api/headerparser/whoami).

2. **Usage Examples**: Here's an example using cURL to convert a timestamp to Unix time:

```bash
curl -X GET https://headerparser.fly.dev/v0/api/headerparser/whoami
```

## API Endpoints

`GET /v0/api/headerparser/whoami` Retrieve request header information.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. Please refer to the [Contributing Guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for more details.
