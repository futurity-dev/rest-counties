import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  Globe,
  MapPin,
  Building2,
  Languages,
  Map,
  AlertCircleIcon,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ApiDocsPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
        
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Globe className="h-8 w-8 text-blue-600" />
          REST Countries API Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Complete API documentation for countries, regions, states, cities, and
          language data.
        </p>
      </div>

        <Alert variant={"destructive"} className="my-4">
              <AlertCircleIcon />
              <AlertTitle>
                This API is still in development and may have some limitations.

              </AlertTitle>
              <AlertDescription>
                    To Avoid Cors Origin use the request from your own server ** Cross Origin Through Browser not Allowed Yet **
              </AlertDescription>
        </Alert>

      <div className="grid gap-8">
        {/* Countries API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Countries API
            </CardTitle>
            <CardDescription>
              Retrieve country information with optional filtering by native
              name.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">GET</Badge>
                <code className="bg-muted px-2 py-1 rounded text-sm">
                  /api/country
                </code>
              </div>

              <Tabs defaultValue="params" className="w-full">
                <TabsList>
                  <TabsTrigger value="params">Parameters</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                  <TabsTrigger value="example">Example</TabsTrigger>
                </TabsList>

                <TabsContent value="params" className="space-y-3">
                  <h4 className="font-semibold">Query Parameters</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <p>
                      <code>native</code> (optional): Filter countries by native
                      name (case-insensitive prefix match)
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="response" className="space-y-3">
                  <h4 className="font-semibold">Response Format</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    {`{
  "statusCode": 200,
  "error": false,
  "data": [
    {
      // Country object with all fields
    }
  ],
  "message": "Countries retrieved successfully"
}`}
                  </pre>
                </TabsContent>

                <TabsContent value="example" className="space-y-3">
                  <h4 className="font-semibold">Example Request</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm">
                    {`GET /api/country?native=United

curl -X GET "https://rest-countries.vercel.app/api/country?native=United"`}
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Languages API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5" />
              Languages API
            </CardTitle>
            <CardDescription>
              Retrieve language and nationality information for countries.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">GET</Badge>
                <code className="bg-muted px-2 py-1 rounded text-sm">
                  /api/language
                </code>
              </div>

              <Tabs defaultValue="params" className="w-full">
                <TabsList>
                  <TabsTrigger value="params">Parameters</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                  <TabsTrigger value="example">Example</TabsTrigger>
                </TabsList>

                <TabsContent value="params" className="space-y-3">
                  <h4 className="font-semibold">Query Parameters</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <p>
                      <code>native</code> (optional): Filter by native name
                      (case-insensitive prefix match)
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="response" className="space-y-3">
                  <h4 className="font-semibold">Response Format</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    {`{
  "statusCode": 200,
  "error": false,
  "data": [
    {
      "name": "Country Name",
      "native": "Native Name",
      "nationality": "Nationality"
    }
  ],
  "message": "Language retrieved successfully"
}`}
                  </pre>
                </TabsContent>

                <TabsContent value="example" className="space-y-3">
                  <h4 className="font-semibold">Example Request</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm">
                    {`GET /api/language

curl -X GET "https://rest-countries.vercel.app/api/language"`}
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Regions API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              Regions API
            </CardTitle>
            <CardDescription>
              Retrieve all regions and countries by region.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Get All Regions */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">GET</Badge>
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    /api/regions
                  </code>
                </div>

                <Tabs defaultValue="response" className="w-full">
                  <TabsList>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="example">Example</TabsTrigger>
                  </TabsList>

                  <TabsContent value="response" className="space-y-3">
                    <h4 className="font-semibold">Response Format</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      {`{
  "statusCode": 200,
  "error": false,
  "data": [
    {
      // Region objects
    }
  ],
  "message": "States retrieved successfully"
}`}
                    </pre>
                  </TabsContent>

                  <TabsContent value="example" className="space-y-3">
                    <h4 className="font-semibold">Example Request</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm">
                      {`GET /api/regions

curl -X GET "https://rest-countries.vercel.app/api/regions"`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>

              <hr className="my-6" />

              {/* Get Countries by Region */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">GET</Badge>
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    /api/regions/[region_id]
                  </code>
                </div>

                <Tabs defaultValue="params" className="w-full">
                  <TabsList>
                    <TabsTrigger value="params">Parameters</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="example">Example</TabsTrigger>
                  </TabsList>

                  <TabsContent value="params" className="space-y-3">
                    <h4 className="font-semibold">Path Parameters</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <p>
                        <code>region_id</code> (required): The ID of the region
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="response" className="space-y-3">
                    <h4 className="font-semibold">Response Format</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      {`{
  "statusCode": 200,
  "error": false,
  "data": [
    {
      // Country objects in the region
    }
  ],
  "message": "Countries retrieved successfully"
}`}
                    </pre>
                  </TabsContent>

                  <TabsContent value="example" className="space-y-3">
                    <h4 className="font-semibold">Example Request</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm">
                      {`GET /api/regions/123

curl -X GET "https://rest-countries.vercel.app/api/regions/123"`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* States API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              States API
            </CardTitle>
            <CardDescription>
              Retrieve states by country and cities by state.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Get States by Country */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">POST</Badge>
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    /api/states
                  </code>
                </div>

                <Tabs defaultValue="body" className="w-full">
                  <TabsList>
                    <TabsTrigger value="body">Request Body</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="example">Example</TabsTrigger>
                  </TabsList>

                  <TabsContent value="body" className="space-y-3">
                    <h4 className="font-semibold">Request Body</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      {`{
  "country_id": "string (required)",
  "limit": "number (optional, default: 500)"
}`}
                    </pre>
                  </TabsContent>

                  <TabsContent value="response" className="space-y-3">
                    <h4 className="font-semibold">Response Format</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      {`{
  "statusCode": 200,
  "error": false,
  "data": [
    {
      // State objects
    }
  ],
  "message": "States retrieved successfully"
}`}
                    </pre>
                  </TabsContent>

                  <TabsContent value="example" className="space-y-3">
                    <h4 className="font-semibold">Example Request</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm">
                      {`POST /api/states
Content-Type: application/json

{
  "country_id": "US",
  "limit": 50
}

curl -X POST "https://rest-countries.vercel.app/api/states" \\
  -H "Content-Type: application/json" \\
  -d '{"country_id": "US", "limit": 50}'`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>

              <hr className="my-6" />

              {/* Get Cities by State */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">GET</Badge>
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    /api/states/[state_id]
                  </code>
                </div>

                <Tabs defaultValue="params" className="w-full">
                  <TabsList>
                    <TabsTrigger value="params">Parameters</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="example">Example</TabsTrigger>
                  </TabsList>

                  <TabsContent value="params" className="space-y-3">
                    <h4 className="font-semibold">Path Parameters</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <p>
                        <code>state_id</code> (required): The ID of the state
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="response" className="space-y-3">
                    <h4 className="font-semibold">Response Format</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      {`{
  "statusCode": 200,
  "error": false,
  "data": [
    {
      // City objects in the state
    }
  ],
  "message": "States retrieved successfully"
}`}
                    </pre>
                  </TabsContent>

                  <TabsContent value="example" className="space-y-3">
                    <h4 className="font-semibold">Example Request</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm">
                      {`GET /api/states/CA

curl -X GET "https://rest-countries.vercel.app/api/states/CA"`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cities API */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Cities API
            </CardTitle>
            <CardDescription>
              Search and retrieve cities by country and optional city name
              filter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">POST</Badge>
                <code className="bg-muted px-2 py-1 rounded text-sm">
                  /api/cities
                </code>
              </div>

              <Tabs defaultValue="body" className="w-full">
                <TabsList>
                  <TabsTrigger value="body">Request Body</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                  <TabsTrigger value="example">Example</TabsTrigger>
                </TabsList>

                <TabsContent value="body" className="space-y-3">
                  <h4 className="font-semibold">Request Body</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    {`{
  "country_name": "string (required)",
  "city_name": "string (optional)",
  "limit": "number (optional, default: 500)"
}`}
                  </pre>
                </TabsContent>

                <TabsContent value="response" className="space-y-3">
                  <h4 className="font-semibold">Response Format</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    {`{
  "statusCode": 200,
  "error": false,
  "data": [
    {
      "name": "City Name",
      "country_name": "Country Name",
      "state_id": "State ID",
      // Other city fields
    }
  ],
  "message": "Cities retrieved successfully"
}`}
                  </pre>
                </TabsContent>

                <TabsContent value="example" className="space-y-3">
                  <h4 className="font-semibold">Example Request</h4>
                  <pre className="bg-muted p-4 rounded-lg text-sm">
                    {`POST /api/cities
Content-Type: application/json

{
  "country_name": "United States",
  "city_name": "New",
  "limit": 100
}

curl -X POST "https://rest-countries.vercel.app/api/cities" \\
  -H "Content-Type: application/json" \\
  -d '{
    "country_name": "United States",
    "city_name": "New",
    "limit": 100
  }'`}
                  </pre>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Error Responses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Error Responses
            </CardTitle>
            <CardDescription>
              Common error response formats across all endpoints.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">400 Bad Request</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  {`{
  "statusCode": 400,
  "error": true,
  "data": null,
  "message": "Required parameter missing"
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  500 Internal Server Error
                </h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  {`{
  "statusCode": 500,
  "error": true,
  "data": null,
  "message": "Internal Server Error"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              General Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Base URL</h4>
                <code className="bg-muted px-2 py-1 rounded text-sm">
                  https://rest-countries.vercel.app
                </code>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Content Type</h4>
                <p>
                  All POST requests should include{" "}
                  <code>Content-Type: application/json</code> header.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Rate Limiting</h4>
                <p>
                  Default limit of 500 results per request. Use the{" "}
                  <code>limit</code> parameter to control response size.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Search Features</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Case-insensitive search for country and city names</li>
                  <li>Prefix matching for native names and city names</li>
                  <li>Regex-based filtering for flexible search patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
