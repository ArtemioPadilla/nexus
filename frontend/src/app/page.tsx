import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Manage All Your Social Media from One Place
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nexus helps you centralize your social networks, publish content across platforms,
          and analyze performance with a unified dashboard.
        </p>
      </section>

      {/* Platform Connection Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Connect Your Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Facebook", icon: "/file.svg", connected: false },
            { name: "Twitter", icon: "/globe.svg", connected: false },
            { name: "Instagram", icon: "/window.svg", connected: false },
            { name: "LinkedIn", icon: "/file.svg", connected: false },
          ].map((platform) => (
            <div key={platform.name} className="border rounded-md p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image src={platform.icon} alt={platform.name} width={24} height={24} />
                </div>
                <span>{platform.name}</span>
              </div>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  platform.connected
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {platform.connected ? "Connected" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Unified Feed Preview */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Unified Feed</h2>
        <div className="space-y-4">
          {[
            {
              platform: "Twitter",
              author: "@exampleUser",
              content: "Just published our latest blog post on social media trends for 2025!",
              engagement: "24 likes • 5 retweets",
              time: "2h ago",
            },
            {
              platform: "Facebook",
              author: "Example Page",
              content: "We're excited to announce our new product launch next week. Stay tuned for more updates!",
              engagement: "42 likes • 8 comments",
              time: "4h ago",
            },
            {
              platform: "Instagram",
              author: "example_gram",
              content: "Behind the scenes at our photoshoot today 📸 #NewCollection",
              engagement: "134 likes • 12 comments",
              time: "6h ago",
            },
          ].map((post, index) => (
            <div key={index} className="border rounded-md p-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{post.author}</span>
                  <span className="text-sm text-gray-500">via {post.platform}</span>
                </div>
                <span className="text-sm text-gray-500">{post.time}</span>
              </div>
              <p className="mb-2">{post.content}</p>
              <div className="text-sm text-gray-500">{post.engagement}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-blue-600 font-medium">View All Posts</button>
        </div>
      </section>

      {/* Post Creator Preview */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <div className="space-y-4">
          <div>
            <textarea
              className="w-full border rounded-md p-3 h-32 focus:ring-blue-500 focus:border-blue-500"
              placeholder="What would you like to share?"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-blue-600">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                Add Media
              </span>
            </button>
            <button className="text-gray-500 hover:text-blue-600">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Schedule
              </span>
            </button>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Post to:</h3>
            <div className="flex space-x-2">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
                <label key={platform} className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-1" />
                  <span className="text-sm">{platform}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Publish
            </button>
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Analytics Overview</h2>
          <button className="text-blue-600 font-medium">See Detailed Report</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Total Followers", value: "4,890", change: "+2.5%" },
            { title: "Engagement Rate", value: "3.2%", change: "+0.8%" },
            { title: "Total Posts", value: "142", change: "+12" },
            { title: "Reach", value: "28.5K", change: "+15.3%" },
          ].map((stat) => (
            <div key={stat.title} className="bg-gray-50 rounded-md p-4">
              <h3 className="text-sm text-gray-500">{stat.title}</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold">{stat.value}</span>
                <span className="ml-2 text-sm text-green-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="h-60 bg-gray-100 flex items-center justify-center rounded-md">
          <p className="text-gray-500">Analytics Chart Visualization Goes Here</p>
        </div>
      </section>
    </div>
  );
}
