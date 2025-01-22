import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for demonstration
const mockData = {
  revenue: [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
  ],
  members: [
    { name: 'Active', value: 245 },
    { name: 'Trial', value: 15 },
    { name: 'Expired', value: 32 }
  ],
  recentActivity: [
    { type: 'New Member', name: 'John Doe', date: '2 minutes ago' },
    { type: 'Payment', name: '$45.00 received', date: '15 minutes ago' },
    { type: 'Cancellation', name: 'Jane Smith', date: '1 hour ago' },
    { type: 'New Member', name: 'Mike Johnson', date: '2 hours ago' }
  ]
};

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | LaunchPass Community Management</title>
        <meta name="description" content="Manage your community, view analytics, and process payments from your LaunchPass dashboard." />
        <meta name="robots" content="noindex" /> {/* Don't index protected pages */}
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-10 px-4">
          {/* Overview Section */}
          <section className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$4,225.00</p>
                  <Badge variant="secondary" className="mt-2">+12.5% from last month</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Members</CardTitle>
                  <CardDescription>Current subscribers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">245</p>
                  <Badge variant="secondary" className="mt-2">+5 this week</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Churn Rate</CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">2.4%</p>
                  <Badge variant="secondary" className="mt-2">-0.5% from last month</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Average Revenue</CardTitle>
                  <CardDescription>Per member</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$45.00</p>
                  <Badge variant="secondary" className="mt-2">No change</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Main Content */}
          <Tabs defaultValue="analytics" className="space-y-4">
            <TabsList>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockData.revenue}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="members">
              <Card>
                <CardHeader>
                  <CardTitle>Member Management</CardTitle>
                  <CardDescription>View and manage your community members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.members.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{category.name} Members</h3>
                          <p className="text-sm text-muted-foreground">{category.value} members</p>
                        </div>
                        <Button variant="outline">View Details</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Community Settings</CardTitle>
                  <CardDescription>Configure your community preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <h3 className="font-semibold">Community Name</h3>
                      <input type="text" className="w-full p-2 border rounded" defaultValue="My Awesome Community" />
                    </div>
                    <div className="grid gap-2">
                      <h3 className="font-semibold">Welcome Message</h3>
                      <textarea className="w-full p-2 border rounded" rows={4} defaultValue="Welcome to our community!" />
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Recent Activity */}
          <section className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{activity.type}</h3>
                        <p className="text-sm text-muted-foreground">{activity.name}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
}