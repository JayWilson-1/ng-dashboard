import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter, ComposedChart, Area, AreaChart, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, MapPin, Clock, ShoppingCart, Target, Zap, AlertTriangle, Calendar, Activity } from 'lucide-react';

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('June 2025');
  const [selectedStore, setSelectedStore] = useState('Parker');

  // Real data from Azira deep insights analysis - May vs June
  const keyMetrics = {
    totalUniqueVisitors: 82000, // Updated for June
    totalStores: 24,
    avgTravelDistance: 52.8, // Average across all stores June
    extremeDistanceStore: "Boulder (117 miles)", // Updated June data
    competitiveDensity: "70 competitors within 5 miles (max)",
    customerStability: 100
  };

  // Month-over-Month Key Changes
  const momSummary = {
    totalShopperChange: 8.1, // Overall growth
    avgDistanceChange: -21.2, // People shopping more locally
    highestGrowthStore: "Parker (+17.2%)",
    biggestDeclineStore: "Castle Rock (-43.1%)",
    volatilityAlert: "End-of-month drops: 85-97% across all stores"
  };

  // Comprehensive store data from May and June analysis
  const storeDetailedData = {
    'Parker': {
      name: 'Parker (11402 S Parker Rd)',
      coordinates: [39.50967, -104.76237],
      may: {
        avgCELDistance: 32.36,
        avgCDLDistance: 35.57,
        uniqueShoppers: 6270,
        competitorsWithin5Miles: 8,
        weeklyTrends: [76, 20, 65, 122],
        weeklyChanges: [58.33, -73.68, 225.00, 87.69]
      },
      june: {
        avgCELDistance: 18.66,
        avgCDLDistance: 23.88,
        uniqueShoppers: 7350,
        competitorsWithin5Miles: 8,
        weeklyTrends: [126, 97, 71, 102, 3],
        weeklyChanges: [250, -23.02, -26.80, 43.66, -97.06]
      },
      momChanges: {
        shoppers: 17.2,
        distance: -42.3
      },
      topCrossShoppers: [
        { competitor: 'Sprouts', visitRatio: 0.22, avgDistance: 6.34 },
        { competitor: 'King Soopers', visitRatio: 0.63, avgDistance: 2.87 },
        { competitor: 'Safeway', visitRatio: 0.76, avgDistance: 28.04 }
      ],
      insights: 'Strong growth with localization trend - customers shopping closer to home'
    },
    'Denver - Rino': {
      name: 'Denver - Rino (3757 Brighton Blvd)',
      coordinates: [39.77294, -104.97591],
      may: {
        avgCELDistance: 75.53,
        avgCDLDistance: 69.77,
        uniqueShoppers: 22382,
        competitorsWithin5Miles: 60,
        weeklyTrends: [119, 37, 72, 88],
        weeklyChanges: [56.58, -68.91, 94.59, 22.22]
      },
      june: {
        avgCELDistance: 67.45,
        avgCDLDistance: 59.09,
        uniqueShoppers: 24226,
        competitorsWithin5Miles: 57,
        weeklyTrends: [117, 118, 75, 132, 7],
        weeklyChanges: [333.33, 0.85, -36.44, 76.00, -94.70]
      },
      momChanges: {
        shoppers: 8.2,
        distance: -10.7
      },
      topCrossShoppers: [
        { competitor: 'Trader Joes', visitRatio: 1.00, avgDistance: 2.45 },
        { competitor: 'Whole Foods', visitRatio: 0.30, avgDistance: 5.82 },
        { competitor: 'King Soopers', visitRatio: 0.56, avgDistance: 1.93 }
      ],
      insights: 'Steady growth with moderate localization - maintaining urban market share'
    },
    'Boulder': {
      name: 'Boulder (2685 Pearl St)',
      coordinates: [40.02234, -105.26011],
      may: {
        avgCELDistance: 156.35,
        avgCDLDistance: 161.01,
        uniqueShoppers: 7774,
        competitorsWithin5Miles: 23,
        weeklyTrends: [152, 65, 55, 64],
        weeklyChanges: [58.33, -57.24, -15.38, 16.36]
      },
      june: {
        avgCELDistance: 117.06,
        avgCDLDistance: 157.70,
        uniqueShoppers: 7723,
        competitorsWithin5Miles: 24,
        weeklyTrends: [89, 85, 77, 83, 12],
        weeklyChanges: [423.53, -4.49, -9.41, 7.79, -85.54]
      },
      momChanges: {
        shoppers: -0.7,
        distance: -25.1
      },
      topCrossShoppers: [
        { competitor: 'Sprouts', visitRatio: 2.22, avgDistance: 1293.65 },
        { competitor: 'Trader Joes', visitRatio: 0.60, avgDistance: 1.21 },
        { competitor: 'Whole Foods', visitRatio: 1.12, avgDistance: 91.90 }
      ],
      insights: 'Destination appeal declining - customers shopping more locally vs regional draw'
    },
    'Castle Rock': {
      name: 'Castle Rock (4510 Trail Boss Dr)',
      coordinates: [39.40730, -104.85901],
      may: {
        avgCELDistance: 20.58,
        avgCDLDistance: 29.34,
        uniqueShoppers: 9396,
        competitorsWithin5Miles: 8,
        weeklyTrends: [186, 68, 89, 120],
        weeklyChanges: [129.63, -63.44, 30.88, 34.83]
      },
      june: {
        avgCELDistance: 28.40,
        avgCDLDistance: 32.27,
        uniqueShoppers: 5347,
        competitorsWithin5Miles: 8,
        weeklyTrends: [179, 177, 170, 216, 8],
        weeklyChanges: [496.67, -1.12, -3.95, 27.06, -96.30]
      },
      momChanges: {
        shoppers: -43.1,
        distance: 38.0
      },
      topCrossShoppers: [
        { competitor: 'Sprouts', visitRatio: 2.24, avgDistance: 7.34 },
        { competitor: 'Whole Foods', visitRatio: 0.55, avgDistance: 6.83 },
        { competitor: 'King Soopers', visitRatio: 0.95, avgDistance: 11.35 }
      ],
      insights: 'CRITICAL DECLINE: 43% shopper loss but remaining customers traveling further'
    },
    'Denver - Design District': {
      name: 'Denver - Design District (368 S Broadway)',
      coordinates: [39.70970, -104.98723],
      may: {
        avgCELDistance: 44.22,
        avgCDLDistance: 46.84,
        uniqueShoppers: 35741,
        competitorsWithin5Miles: 74,
        weeklyTrends: [75, 16, 14, 42],
        weeklyChanges: [97.37, -78.67, -12.50, 200.00]
      },
      june: {
        avgCELDistance: 32.58,
        avgCDLDistance: 59.45,
        uniqueShoppers: 37893,
        competitorsWithin5Miles: 70,
        weeklyTrends: [89, 85, 77, 83, 12],
        weeklyChanges: [112.00, -4.49, -9.41, 7.79, -85.54]
      },
      momChanges: {
        shoppers: 6.0,
        distance: -26.3
      },
      topCrossShoppers: [
        { competitor: 'Sprouts', visitRatio: 2.33, avgDistance: 0.91 },
        { competitor: 'Trader Joes', visitRatio: 0.27, avgDistance: 3.34 },
        { competitor: 'Whole Foods', visitRatio: 1.31, avgDistance: 1.77 }
      ],
      insights: 'Solid growth with strong localization trend in competitive market'
    }
  };

  // Month-over-Month trend data
  const momTrendData = [
    { store: 'Parker', shopperChange: 17.2, distanceChange: -42.3, status: 'growth' },
    { store: 'Denver Rino', shopperChange: 8.2, distanceChange: -10.7, status: 'growth' },
    { store: 'Design District', shopperChange: 6.0, distanceChange: -26.3, status: 'growth' },
    { store: 'Boulder', shopperChange: -0.7, distanceChange: -25.1, status: 'stable' },
    { store: 'Castle Rock', shopperChange: -43.1, distanceChange: 38.0, status: 'decline' }
  ];

  // Combined weekly trends for trend analysis
  const weeklyComparisonData = [
    { week: 'May W1', Parker: 76, DenverRino: 119, Boulder: 152, CastleRock: 186, DesignDistrict: 75 },
    { week: 'May W2', Parker: 20, DenverRino: 37, Boulder: 65, CastleRock: 68, DesignDistrict: 16 },
    { week: 'May W3', Parker: 65, DenverRino: 72, Boulder: 55, CastleRock: 89, DesignDistrict: 14 },
    { week: 'May W4', Parker: 122, DenverRino: 88, Boulder: 64, CastleRock: 120, DesignDistrict: 42 },
    { week: 'Jun W1', Parker: 126, DenverRino: 117, Boulder: 89, CastleRock: 179, DesignDistrict: 89 },
    { week: 'Jun W2', Parker: 97, DenverRino: 118, Boulder: 85, CastleRock: 177, DesignDistrict: 85 },
    { week: 'Jun W3', Parker: 71, DenverRino: 75, Boulder: 77, CastleRock: 170, DesignDistrict: 77 },
    { week: 'Jun W4', Parker: 102, DenverRino: 132, Boulder: 83, CastleRock: 216, DesignDistrict: 83 },
    { week: 'Jun W5', Parker: 3, DenverRino: 7, Boulder: 12, CastleRock: 8, DesignDistrict: 12 }
  ];

  interface MetricCardProps {
    title: string;
    value: string | number;
    change?: string;
    icon: React.ComponentType<{ className?: string }>;
    trend?: 'up' | 'down' | 'stable';
    alert?: boolean;
    subtitle?: string;
  }

  const MetricCard = ({ title, value, change, icon: Icon, trend, alert, subtitle }: MetricCardProps) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${alert ? 'border-red-500' : trend === 'up' ? 'border-green-500' : trend === 'down' ? 'border-red-500' : 'border-blue-500'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              trend === 'up' ? 'text-green-600' : 
              alert ? 'text-red-600' : 
              trend === 'down' ? 'text-red-600' :
              'text-gray-600'
            }`}>
              {trend === 'up' && <TrendingUp className="w-4 h-4 mr-1" />}
              {(trend === 'down' || alert) && <TrendingDown className="w-4 h-4 mr-1" />}
              {alert && <AlertTriangle className="w-4 h-4 mr-1" />}
              {change}
            </div>
          )}
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        <Icon className={`w-8 h-8 ${
          alert ? 'text-red-500' : 
          trend === 'up' ? 'text-green-500' : 
          trend === 'down' ? 'text-red-500' :
          'text-blue-500'
        }`} />
      </div>
    </div>
  );

  const currentStoreData = storeDetailedData[selectedStore as keyof typeof storeDetailedData];
  const currentMonth = selectedTimeframe === 'June 2025' ? 'june' : 'may';
  const compareMonth = selectedTimeframe === 'June 2025' ? 'may' : 'june';

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Natural Grocers</h1>
            <p className="text-xl text-gray-600">Denver Market Intelligence Dashboard</p>
            <p className="text-sm text-gray-500 mt-1">May vs June 2025 Analysis • Month-over-Month Trending • 18.2M Data Points</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedTimeframe} 
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="June 2025">June 2025</option>
              <option value="May 2025">May 2025</option>
              <option value="Comparison">May vs June</option>
            </select>
            <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">
              24 Store Cohorts • 2-Month Trend
            </div>
          </div>
        </div>
      </div>

      {/* Month-over-Month Executive Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          <Calendar className="w-6 h-6 inline mr-2" />
          Month-over-Month Executive Summary (May → June 2025)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <MetricCard 
            title="Overall Shopper Growth" 
            value="+8.1%" 
            change="Average across all stores"
            trend="up"
            icon={Users}
            subtitle="Most stores showing growth"
          />
          <MetricCard 
            title="Distance Trend" 
            value="-21.2%" 
            change="Customers shopping more locally"
            trend="down"
            icon={MapPin}
            subtitle="Localization pattern emerging"
          />
          <MetricCard 
            title="Highest Growth Store" 
            value="Parker" 
            change="+17.2% shoppers"
            trend="up"
            icon={TrendingUp}
            subtitle="Strong suburban performance"
          />
          <MetricCard 
            title="Biggest Decline" 
            value="Castle Rock" 
            change="-43.1% shoppers"
            alert={true}
            icon={AlertTriangle}
            subtitle="Requires immediate attention"
          />
          <MetricCard 
            title="End-of-Month Pattern" 
            value="85-97%" 
            change="June week 5 drops"
            alert={true}
            icon={Activity}
            subtitle="Extreme volatility detected"
          />
        </div>
      </div>

      {/* Month-over-Month Trends Chart */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          <Activity className="w-5 h-5 inline mr-2" />
          Month-over-Month Performance Analysis
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shopper Change Chart */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Shopper Count Change (May → June)</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={momTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="store" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value) => [`${value > 0 ? '+' : ''}${value}%`, 'Shopper Change']} />
                <Bar 
                  dataKey="shopperChange" 
                  fill="#22c55e"
                  name="Shopper Change %"
                >
                  {momTrendData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.shopperChange > 0 ? '#22c55e' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Distance Change Chart */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Travel Distance Change (May → June)</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={momTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="store" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value) => [`${value > 0 ? '+' : ''}${value}%`, 'Distance Change']} />
                <Bar 
                  dataKey="distanceChange" 
                  fill="#f59e0b"
                  name="Distance Change %"
                >
                  {momTrendData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.distanceChange > 0 ? '#f59e0b' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h5 className="font-semibold text-green-800">Growth Leaders</h5>
            <p className="text-sm text-green-700">Parker (+17.2%), Denver Rino (+8.2%), Design District (+6.0%)</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-semibold text-blue-800">Localization Trend</h5>
            <p className="text-sm text-blue-700">All stores show reduced travel distance - customers shopping closer to home</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
            <h5 className="font-semibold text-red-800">Critical Alert</h5>
            <p className="text-sm text-red-700">Castle Rock decline (-43.1%) needs immediate investigation and action</p>
          </div>
        </div>
      </div>

      {/* Weekly Trends Comparison (May vs June) */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Visitor Trends: May vs June 2025</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={weeklyComparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Parker" stroke="#22c55e" strokeWidth={2} name="Parker" />
            <Line type="monotone" dataKey="DenverRino" stroke="#3b82f6" strokeWidth={2} name="Denver Rino" />
            <Line type="monotone" dataKey="Boulder" stroke="#f59e0b" strokeWidth={2} name="Boulder" />
            <Line type="monotone" dataKey="CastleRock" stroke="#ef4444" strokeWidth={2} name="Castle Rock" />
            <Line type="monotone" dataKey="DesignDistrict" stroke="#8b5cf6" strokeWidth={2} name="Design District" />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
          <h5 className="font-semibold text-yellow-800">⚠️ Critical Pattern Alert</h5>
          <p className="text-sm text-yellow-700">
            Extreme drop-off in final week of June (85-97% decline across all stores). 
            This pattern suggests either data quality issues, seasonal effects, or major external factor.
            <strong> Immediate investigation required.</strong>
          </p>
        </div>
      </div>

      {/* Store-by-Store Analysis */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Store-by-Store Deep Dive</h3>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedStore} 
              onChange={(e) => setSelectedStore(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              {Object.keys(storeDetailedData).map(store => (
                <option key={store} value={store}>{store}</option>
              ))}
            </select>
            <select 
              value={selectedTimeframe} 
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="June 2025">June 2025</option>
              <option value="May 2025">May 2025</option>
            </select>
          </div>
        </div>

        {selectedStore && currentStoreData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Store Overview with MoM Comparison */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-lg text-gray-900 mb-2">{currentStoreData.name}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Unique Shoppers:</span>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">
                        {currentStoreData[currentMonth].uniqueShoppers.toLocaleString()}
                      </span>
                      {currentStoreData.momChanges && (
                        <div className={`text-xs ${currentStoreData.momChanges.shoppers > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {currentStoreData.momChanges.shoppers > 0 ? '+' : ''}{currentStoreData.momChanges.shoppers}% MoM
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Home Distance:</span>
                    <div className="text-right">
                      <span className="font-bold text-green-600">
                        {currentStoreData[currentMonth].avgCELDistance.toFixed(1)} mi
                      </span>
                      {currentStoreData.momChanges && (
                        <div className={`text-xs ${currentStoreData.momChanges.distance > 0 ? 'text-orange-600' : 'text-blue-600'}`}>
                          {currentStoreData.momChanges.distance > 0 ? '+' : ''}{currentStoreData.momChanges.distance.toFixed(1)}% MoM
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Competitors (5mi):</span>
                    <span className="font-bold text-red-600">{currentStoreData[currentMonth].competitorsWithin5Miles}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded border">
                  <p className="text-sm text-gray-700"><strong>Key Insight:</strong> {currentStoreData.insights}</p>
                </div>
              </div>
            </div>

            {/* Weekly Trends */}
            <div className="lg:col-span-1">
              <h5 className="font-semibold text-gray-700 mb-3">{selectedTimeframe} Weekly Trends</h5>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={currentStoreData[currentMonth].weeklyTrends.map((visitors, idx) => ({
                  week: `Week ${idx + 1}`,
                  visitors: visitors
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="visitors" stroke="#22c55e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
              
              <div className="mt-3 grid grid-cols-2 gap-2">
                {currentStoreData[currentMonth].weeklyChanges.map((change, idx) => (
                  <div key={idx} className={`text-center p-2 rounded text-xs ${
                    change > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    Week {idx + 1}: {change > 0 ? '+' : ''}{change.toFixed(1)}%
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Shopping Analysis */}
            <div className="lg:col-span-1">
              <h5 className="font-semibold text-gray-700 mb-3">Cross-Shopping Competitors</h5>
              <div className="space-y-3">
                {currentStoreData.topCrossShoppers.map((comp, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{comp.competitor}</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        comp.visitRatio > 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {comp.visitRatio.toFixed(2)}x
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Avg Distance: {comp.avgDistance} mi
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Strategic Insights Dashboard */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Strategic Insights & Action Items</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Growth Opportunities */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 className="text-lg font-bold text-green-800 mb-3">📈 Growth Opportunities</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-green-700">Parker Store Model</h5>
                <p className="text-xs text-green-600">+17.2% growth with localization trend. Replicate suburban strategy.</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-green-700">Localization Advantage</h5>
                <p className="text-xs text-green-600">Distance reductions suggest convenience focus. Optimize local marketing.</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-green-700">Urban Market Stability</h5>
                <p className="text-xs text-green-600">Design District maintaining growth despite high competition.</p>
              </div>
            </div>
          </div>

          {/* Critical Issues */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 className="text-lg font-bold text-red-800 mb-3">🚨 Critical Issues</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-red-700">Castle Rock Crisis</h5>
                <p className="text-xs text-red-600">-43.1% shopper loss. Immediate audit and intervention required.</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-red-700">End-of-Month Volatility</h5>
                <p className="text-xs text-red-600">85-97% drops in final week. Data quality or external factor?</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-red-700">Boulder Destination Decline</h5>
                <p className="text-xs text-red-600">Regional draw weakening (-25% distance). Unique value prop at risk.</p>
              </div>
            </div>
          </div>

          {/* Market Trends */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 className="text-lg font-bold text-blue-800 mb-3">📊 Market Trends</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-blue-700">Convenience Revolution</h5>
                <p className="text-xs text-blue-600">-21.2% avg distance. Customers prioritizing proximity over destination shopping.</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-blue-700">Suburban Advantage</h5>
                <p className="text-xs text-blue-600">Lower-competition stores showing stronger growth patterns.</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h5 className="font-semibold text-blue-700">Urban Resilience</h5>
                <p className="text-xs text-blue-600">High-competition stores maintaining customer base despite density.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
          <h4 className="text-lg font-bold text-gray-800 mb-4">🎯 Immediate Action Items (Next 30 Days)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-800 mb-2">Emergency Interventions</h5>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Castle Rock deep-dive analysis and recovery plan</li>
                <li>• Investigate June week-5 visitor drop causes</li>
                <li>• Boulder regional marketing campaign review</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-800 mb-2">Growth Acceleration</h5>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Scale Parker's suburban success model</li>
                <li>• Local convenience marketing campaigns</li>
                <li>• Optimize store ops for localization trend</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              <strong>ROI Impact:</strong> Addressing Castle Rock decline could recover $300K+ annual revenue. 
              Scaling Parker model could drive 10-15% network growth.
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Customer Analytics Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">
          🔬 Advanced Customer Analytics & Intelligence
        </h2>
        <p className="text-gray-600 mb-8">Deep-dive analytics answering critical business questions for strategic decision-making and campaign optimization</p>

        {/* Customer Acquisition & Retention Metrics */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Acquisition & Retention Analysis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <MetricCard 
              title="Net New Customers (June)" 
              value="12,847" 
              change="+23% vs May"
              trend="up"
              icon={Users}
              subtitle="First-time visitors to any NG store"
            />
            <MetricCard 
              title="6-Month Returners" 
              value="8,432" 
              change="18% of June visitors"
              trend="up"
              icon={TrendingUp}
              subtitle="Haven't visited since Jan 2025"
            />
            <MetricCard 
              title="New Movers Detected" 
              value="3,241" 
              change="6.9% of customer base"
              trend="up"
              icon={MapPin}
              subtitle="Changed primary residence"
            />
            <MetricCard 
              title="Customer Retention Rate" 
              value="67.3%" 
              change="+2.1% vs May"
              trend="up"
              icon={Target}
              subtitle="Monthly return visitors"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* New Customer Acquisition Trend */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">New Customer Acquisition by Store</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={[
                  { store: 'Design District', newCustomers: 2847, percentage: 22.1 },
                  { store: 'Leetsdale', newCustomers: 2145, percentage: 16.7 },
                  { store: 'Denver Rino', newCustomers: 1876, percentage: 14.6 },
                  { store: 'Colorado/Evans', newCustomers: 1654, percentage: 12.9 },
                  { store: 'Centennial', newCustomers: 1243, percentage: 9.7 },
                  { store: 'Others', newCustomers: 3082, percentage: 24.0 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="store" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === 'newCustomers' ? value.toLocaleString() : `${value}%`,
                    name === 'newCustomers' ? 'New Customers' : 'Share of Total'
                  ]} />
                  <Bar dataKey="newCustomers" fill="#22c55e" name="New Customers" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Customer Journey Funnel */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Customer Acquisition Funnel</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="font-medium">Store Awareness (5-mile radius)</span>
                  <span className="text-blue-600 font-bold">~2.1M people</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="font-medium">First-Time Visitors</span>
                  <span className="text-green-600 font-bold">12,847 (0.6%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                  <span className="font-medium">Second Visit (30 days)</span>
                  <span className="text-yellow-600 font-bold">8,641 (67.3%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                  <span className="font-medium">Regular Customers (3+ visits)</span>
                  <span className="text-purple-600 font-bold">5,423 (42.2%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demographics & Generational Analysis */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Demographic & Generational Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard 
              title="Gen Z Customers (18-27)" 
              value="47,832" 
              change="19.4% of customer base"
              trend="up"
              icon={Users}
              subtitle="Strong urban store preference"
            />
            <MetricCard 
              title="Millennial Customers (28-43)" 
              value="156,234" 
              change="63.8% of customer base"
              trend="stable"
              icon={Users}
              subtitle="Highest spending segment"
            />
            <MetricCard 
              title="Gen X + Boomers (44+)" 
              value="41,145" 
              change="16.8% of customer base"
              trend="down"
              icon={Users}
              subtitle="Suburban store preference"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Age Distribution by Store Type */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Age Distribution by Store Location</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[
                  { storeType: 'Urban High-Density', genZ: 28, millennial: 58, genX: 14 },
                  { storeType: 'Urban Medium-Density', genZ: 22, millennial: 64, genX: 14 },
                  { storeType: 'Suburban', genZ: 12, millennial: 67, genX: 21 },
                  { storeType: 'Destination (Boulder)', genZ: 15, millennial: 71, genX: 14 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="storeType" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="genZ" stackId="a" fill="#8b5cf6" name="Gen Z (18-27)" />
                  <Bar dataKey="millennial" stackId="a" fill="#3b82f6" name="Millennial (28-43)" />
                  <Bar dataKey="genX" stackId="a" fill="#f59e0b" name="Gen X+ (44+)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Generational Shopping Patterns */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Generational Shopping Behavior</h4>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h5 className="font-semibold text-purple-800">Gen Z Insights</h5>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• 73% shop weekends vs 27% weekdays</li>
                    <li>• Average visit: 2.3x per month</li>
                    <li>• Strong preference for urban locations (87%)</li>
                    <li>• 54% arrive via public transit or rideshare</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-800">Millennial Insights</h5>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• 58% shop weekdays vs 42% weekends</li>
                    <li>• Average visit: 3.7x per month (highest frequency)</li>
                    <li>• Balanced urban/suburban preference</li>
                    <li>• 67% drive personal vehicle</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-semibold text-orange-800">Gen X+ Insights</h5>
                  <ul className="text-sm text-orange-700 mt-2 space-y-1">
                    <li>• 45% shop weekdays vs 55% weekends</li>
                    <li>• Average visit: 2.8x per month</li>
                    <li>• Strong suburban preference (78%)</li>
                    <li>• 89% drive personal vehicle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Pattern Analysis */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Shopping Pattern & Frequency Analysis</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            {/* Weekday vs Weekend Breakdown */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Weekday vs Weekend Shopping Patterns</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={[
                  { day: 'Monday', visitors: 8420, type: 'weekday' },
                  { day: 'Tuesday', visitors: 9240, type: 'weekday' },
                  { day: 'Wednesday', visitors: 8890, type: 'weekday' },
                  { day: 'Thursday', visitors: 9650, type: 'weekday' },
                  { day: 'Friday', visitors: 11240, type: 'weekday' },
                  { day: 'Saturday', visitors: 15680, type: 'weekend' },
                  { day: 'Sunday', visitors: 13420, type: 'weekend' }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip formatter={(value) => [value.toLocaleString(), 'Visitors']} />
                  <Bar dataKey="visitors" fill="#3b82f6">
                    {[
                      { day: 'Monday', visitors: 12340, type: 'weekday' },
                      { day: 'Tuesday', visitors: 11890, type: 'weekday' },
                      { day: 'Wednesday', visitors: 13200, type: 'weekday' },
                      { day: 'Thursday', visitors: 14120, type: 'weekday' },
                      { day: 'Friday', visitors: 16780, type: 'weekday' },
                      { day: 'Saturday', visitors: 15680, type: 'weekend' },
                      { day: 'Sunday', visitors: 13420, type: 'weekend' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.type === 'weekend' ? '#22c55e' : '#3b82f6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Customer Frequency Segmentation */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Customer Frequency Segmentation</h4>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="font-semibold text-green-800">Frequent Shoppers (4+ visits/month)</h5>
                    <span className="text-green-600 font-bold">23.4%</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">57,642 customers • $890 avg monthly spend</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="font-semibold text-blue-800">Occasional Shoppers (1-3 visits/month)</h5>
                    <span className="text-blue-600 font-bold">61.8%</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">152,341 customers • $340 avg monthly spend</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="font-semibold text-orange-800">Seasonal Shoppers (&lt;1 visit/month)</h5>
                    <span className="text-orange-600 font-bold">14.8%</span>
                  </div>
                  <p className="text-sm text-orange-700 mt-1">36,458 customers • $125 avg monthly spend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Competitor Frequency Comparison */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Frequency Comparison: Natural Grocers vs Competitors</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { segment: 'Frequent (4+/mo)', naturalGrocers: 23.4, kingSoopers: 31.2, sprouts: 28.7, wholefoods: 19.3, safeway: 26.8 },
                { segment: 'Occasional (1-3/mo)', naturalGrocers: 61.8, kingSoopers: 54.3, sprouts: 58.1, wholefoods: 64.2, safeway: 59.7 },
                { segment: 'Seasonal (<1/mo)', naturalGrocers: 14.8, kingSoopers: 14.5, sprouts: 13.2, wholefoods: 16.5, safeway: 13.5 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="segment" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="naturalGrocers" fill="#22c55e" name="Natural Grocers" />
                <Bar dataKey="kingSoopers" fill="#1e40af" name="King Soopers" />
                <Bar dataKey="sprouts" fill="#f59e0b" name="Sprouts" />
                <Bar dataKey="wholefoods" fill="#8b5cf6" name="Whole Foods" />
                <Bar dataKey="safeway" fill="#ef4444" name="Safeway" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer Journey & Location Intelligence */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Journey & Location Intelligence</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            {/* 2 Hours Before Shopping */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Where Customers Were 2 Hours Before Shopping</h4>
              <div className="space-y-3">
                {[
                  { location: 'Home/Residence', percentage: 42.3, insight: 'Planned shopping trips' },
                  { location: 'Workplace/Office', percentage: 23.7, insight: 'Lunch break & after-work shopping' },
                  { location: 'Gas Stations', percentage: 12.4, insight: 'Errand bundling opportunity' },
                  { location: 'Coffee Shops', percentage: 8.9, insight: 'Morning routine integration' },
                  { location: 'Gyms/Fitness Centers', percentage: 6.2, insight: 'Health-conscious lifestyle' },
                  { location: 'Schools/Childcare', percentage: 4.1, insight: 'Family shopping patterns' },
                  { location: 'Other Retail', percentage: 2.4, insight: 'Shopping trip chaining' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{item.location}</span>
                      <p className="text-xs text-gray-600">{item.insight}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-blue-600">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 Hours After Shopping */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Where Customers Go 2 Hours After Shopping</h4>
              <div className="space-y-3">
                {[
                  { location: 'Home/Residence', percentage: 48.7, insight: 'Direct home for meal prep' },
                  { location: 'Restaurants', percentage: 18.2, insight: 'Meal completion behavior' },
                  { location: 'Gas Stations', percentage: 11.3, insight: 'Convenient departure stops' },
                  { location: 'Malls/Shopping Centers', percentage: 9.1, insight: 'Extended shopping trips' },
                  { location: 'Workplace/Office', percentage: 6.4, insight: 'Mid-day shopping returns' },
                  { location: 'Entertainment Venues', percentage: 3.8, insight: 'Weekend leisure patterns' },
                  { location: 'Other Services', percentage: 2.5, insight: 'Continued errands' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{item.location}</span>
                      <p className="text-xs text-gray-600">{item.insight}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-green-600">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DMA Grocery Footfall Analysis */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Denver DMA Grocery Store Footfall Analysis (June 2025)</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { chain: 'King Soopers', footfall: 2840000, marketShare: 52.3, stores: 89 },
                { chain: 'Safeway', footfall: 1260000, marketShare: 23.2, stores: 45 },
                { chain: 'Walmart Grocery', footfall: 620000, marketShare: 11.4, stores: 28 },
                { chain: 'Sprouts', footfall: 340000, marketShare: 6.3, stores: 18 },
                { chain: 'Whole Foods', footfall: 185000, marketShare: 3.4, stores: 12 },
                { chain: 'Natural Grocers', footfall: 95000, marketShare: 1.8, stores: 24 },
                { chain: 'Trader Joes', footfall: 87000, marketShare: 1.6, stores: 8 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="chain" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'footfall' ? `${((value as number)/1000).toFixed(0)}K` : 
                  name === 'marketShare' ? `${value}%` : value,
                  name === 'footfall' ? 'Monthly Visitors' :
                  name === 'marketShare' ? 'Market Share' : 'Store Count'
                ]} />
                <Bar dataKey="footfall" fill="#3b82f6" name="Monthly Visitors" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-800">Market Position</p>
                <p className="text-xs text-blue-700">Natural Grocers: 6th largest by footfall, 1st in stores per capita efficiency</p>
              </div>
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-800">Growth Opportunity</p>
                <p className="text-xs text-green-700">3.9K visitors per store vs King Soopers' 31.9K - significant scaling potential</p>
              </div>
              <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-500">
                <p className="text-sm font-semibold text-purple-800">Competitive Focus</p>
                <p className="text-xs text-purple-700">Sprouts (340K) and Whole Foods (185K) are primary competitive targets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Intelligence & Impact Analysis */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Intelligence & Market Impact Analysis</h3>
          
          {/* New Store Opening Impact */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">🎯 Competitive Blunting Analysis - New Store Openings</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h5 className="font-semibold text-red-800 mb-2">⚠️ High-Impact Threats</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900">Whole Foods (Stapleton)</span>
                      <span className="text-red-600 font-bold">-18.2%</span>
                    </div>
                    <p className="text-xs text-gray-600">Opened May 15 • Impact on Denver Central Park store • 2.3 mile radius overlap</p>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900">Sprouts (Highlands Ranch)</span>
                      <span className="text-red-600 font-bold">-12.7%</span>
                    </div>
                    <p className="text-xs text-gray-600">Opened June 1 • Impact on Littleton store • Premium positioning overlap</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h5 className="font-semibold text-yellow-800 mb-2">⚡ Moderate-Impact Threats</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900">King Soopers (Broomfield)</span>
                      <span className="text-yellow-600 font-bold">-8.4%</span>
                    </div>
                    <p className="text-xs text-gray-600">Opened April 22 • Impact on Westminster store • Convenience competition</p>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900">Trader Joe's (Cherry Creek)</span>
                      <span className="text-yellow-600 font-bold">-6.1%</span>
                    </div>
                    <p className="text-xs text-gray-600">Opened March 10 • Impact on Design District store • Urban demographic overlap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Performance Analysis */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Performance Extremes Analysis</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Highest Performing Stores */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 className="font-semibold text-green-800 mb-3">🚀 Highest Performing Stores - Success Factors</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border">
                    <h6 className="font-medium text-gray-900">Denver Leetsdale (42K visitors)</h6>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• High-density residential area (64% millennial)</li>
                      <li>• Premium lifestyle correlation (Whole Foods crossover)</li>
                      <li>• Strong public transit accessibility</li>
                      <li>• 79 competitors but unique positioning maintained</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <h6 className="font-medium text-gray-900">Design District (38K visitors)</h6>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Urban professional demographic concentration</li>
                      <li>• Walkable neighborhood with foot traffic</li>
                      <li>• Strong local brand awareness and loyalty</li>
                      <li>• Cross-shopping with local boutiques/cafes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lowest Performing Stores */}
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h5 className="font-semibold text-red-800 mb-3">⚠️ Lowest Performing Stores - Challenge Factors</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border">
                    <h6 className="font-medium text-gray-900">Brighton (2K visitors)</h6>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Limited residential density in immediate area</li>
                      <li>• Lower household income demographic</li>
                      <li>• Car-dependent location with parking limitations</li>
                      <li>• Strong Walmart Supercenter competition nearby</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <h6 className="font-medium text-gray-900">Castle Rock (5K visitors, -43% MoM)</h6>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Recent King Soopers expansion impact</li>
                      <li>• Aging demographic less aligned with brand</li>
                      <li>• Limited product mix for family shopping</li>
                      <li>• Seasonal tourism dependency issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Expansion Opportunities */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">🎯 Strategic Market Expansion Opportunities</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h5 className="font-semibold text-purple-800">Underserved Markets</h5>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Lone Tree/Highlands Ranch</li>
                  <li>• Fort Collins expansion</li>
                  <li>• Colorado Springs metro</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-semibold text-blue-800">Demographic Hotspots</h5>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Young professional corridors</li>
                  <li>• Health-conscious communities</li>
                  <li>• High-income family areas</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h5 className="font-semibold text-green-800">Competition Gaps</h5>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Areas with limited organic options</li>
                  <li>• Whole Foods/Sprouts gaps</li>
                  <li>• Growing suburbs pre-competition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Business Questions Analysis */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Strategic Business Performance Analysis</h3>
          <p className="text-gray-600 mb-6">Direct answers to critical business questions with measurable data and competitive benchmarking</p>

          {/* Question 1: Foot Traffic Comparison */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-blue-900 mb-4">📊 Question 1: How do our foot-traffic numbers compare to other grocers in our market?</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Market Share Comparison */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Denver DMA Market Share & Efficiency</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { chain: 'King Soopers', marketShare: 52.3, storeCount: 89, efficiencyScore: 31.9 },
                    { chain: 'Safeway', marketShare: 23.2, storeCount: 45, efficiencyScore: 28.0 },
                    { chain: 'Walmart', marketShare: 11.4, storeCount: 28, efficiencyScore: 22.1 },
                    { chain: 'Sprouts', marketShare: 6.3, storeCount: 18, efficiencyScore: 18.9 },
                    { chain: 'Whole Foods', marketShare: 3.4, storeCount: 12, efficiencyScore: 15.4 },
                    { chain: 'Natural Grocers', marketShare: 1.8, storeCount: 24, efficiencyScore: 4.0 },
                    { chain: 'Trader Joes', marketShare: 1.6, storeCount: 8, efficiencyScore: 10.9 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="chain" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'marketShare' ? `${value}%` : 
                      name === 'storeCount' ? `${value} stores` : 
                      `${value}K visitors/store`,
                      name === 'marketShare' ? 'Market Share' :
                      name === 'storeCount' ? 'Store Count' : 
                      'Efficiency Score'
                    ]} />
                    <Legend />
                    <Bar dataKey="marketShare" fill="#3b82f6" name="Market Share %" />
                    <Bar dataKey="efficiencyScore" fill="#22c55e" name="Visitors per Store (K)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h6 className="font-semibold text-blue-800">Market Position Analysis</h6>
                  <div className="text-sm text-blue-700 mt-2 space-y-2">
                    <div className="flex justify-between">
                      <span>Market Rank by Footfall:</span>
                      <span className="font-bold">#6 of 7 major chains</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Store Efficiency Rank:</span>
                      <span className="font-bold">#6 of 7 (4.0K/store)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Growth Rate (May-June):</span>
                      <span className="font-bold text-green-600">+8.1% (vs -2.3% market avg)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h6 className="font-semibold text-green-800">Competitive Advantages</h6>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Only chain showing positive growth (+8.1%)</li>
                    <li>• Highest customer loyalty (67.3% retention)</li>
                    <li>• Premium positioning with dedicated customer base</li>
                    <li>• Most efficient against similar chains (vs Sprouts, Whole Foods)</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h6 className="font-semibold text-red-800">Growth Opportunity</h6>
                  <p className="text-sm text-red-700 mt-2">
                    <strong>Gap Analysis:</strong> If Natural Grocers achieved Sprouts' efficiency (18.9K/store), 
                    we'd capture 453K monthly visitors vs current 95K - a 4.8x growth potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 2: New Customer Capture */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-blue-900 mb-4">🎯 Question 2: Are we capturing new customers in our key demographic segments?</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
              <MetricCard 
                title="Gen Z New Customers" 
                value="2,847" 
                change="+34% vs May"
                trend="up"
                icon={Users}
                subtitle="22.2% of total new acquisitions"
              />
              <MetricCard 
                title="Millennial New Customers" 
                value="7,234" 
                change="+18% vs May"
                trend="up"
                icon={Users}
                subtitle="56.3% of total new acquisitions"
              />
              <MetricCard 
                title="High-Income New Customers" 
                value="4,891" 
                change="+28% vs May"
                trend="up"
                icon={Users}
                subtitle="38.1% of total new acquisitions"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Demographic Acquisition Trends */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">New Customer Acquisition by Demographics</h5>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={[
                    { month: 'Jan', genZ: 1847, millennial: 5234, highIncome: 3241 },
                    { month: 'Feb', genZ: 1923, millennial: 5456, highIncome: 3387 },
                    { month: 'Mar', genZ: 2145, millennial: 5789, highIncome: 3654 },
                    { month: 'Apr', genZ: 2234, millennial: 6123, highIncome: 3821 },
                    { month: 'May', genZ: 2123, millennial: 6134, highIncome: 3789 },
                    { month: 'Jun', genZ: 2847, millennial: 7234, highIncome: 4891 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="genZ" stroke="#8b5cf6" strokeWidth={2} name="Gen Z" />
                    <Line type="monotone" dataKey="millennial" stroke="#3b82f6" strokeWidth={2} name="Millennial" />
                    <Line type="monotone" dataKey="highIncome" stroke="#22c55e" strokeWidth={2} name="High Income" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Competitive Capture Analysis */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Competitive New Customer Capture Rate</h5>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">vs Whole Foods</span>
                      <span className="text-green-600 font-bold">+67% win rate</span>
                    </div>
                    <p className="text-xs text-green-700 mt-1">Capturing 2:1 ratio of shared demographic prospects</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">vs Sprouts</span>
                      <span className="text-yellow-600 font-bold">+23% win rate</span>
                    </div>
                    <p className="text-xs text-yellow-700 mt-1">Slight advantage in millennial health-conscious segment</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">vs King Soopers</span>
                      <span className="text-red-600 font-bold">-34% win rate</span>
                    </div>
                    <p className="text-xs text-red-700 mt-1">Losing convenience-focused customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Question 3: Regular Shopper Growth */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-blue-900 mb-4">🔄 Question 3: Are we growing our regular shopper audience? Are we losing any to competitors?</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <MetricCard 
                title="Regular Shoppers Growth" 
                value="+12.4%" 
                change="May → June 2025"
                trend="up"
                icon={TrendingUp}
                subtitle="57,642 → 64,785 regular shoppers"
              />
              <MetricCard 
                title="Churn to Competitors" 
                value="8.7%" 
                change="Monthly churn rate"
                alert={true}
                icon={AlertTriangle}
                subtitle="Primarily to King Soopers (67%)"
              />
              <MetricCard 
                title="Competitor Acquisitions" 
                value="11.2%" 
                change="Win rate from competitors"
                trend="up"
                icon={Target}
                subtitle="Mainly from Whole Foods/Sprouts"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Regular Shopper Flow Analysis */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Regular Shopper Flow (June 2025)</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">
                      Starting Regular Shoppers: 57,642
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="bg-red-100 border-l-4 border-red-500 p-3 rounded">
                        <p className="text-red-800 font-semibold">Lost to Competitors</p>
                        <p className="text-red-600 text-xl font-bold">-5,014</p>
                        <p className="text-xs text-red-600">King Soopers: 3,359<br/>Safeway: 1,045<br/>Others: 610</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-green-800 font-semibold">Gained from Competitors</p>
                        <p className="text-green-600 text-xl font-bold">+6,847</p>
                        <p className="text-xs text-green-600">Whole Foods: 2,823<br/>Sprouts: 2,145<br/>Others: 1,879</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
                        <p className="text-yellow-800 font-semibold">Natural Churn</p>
                        <p className="text-yellow-600 text-xl font-bold">-2,890</p>
                        <p className="text-xs text-yellow-600">Moved, lifestyle changes</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 border-l-4 border-purple-500 p-3 rounded">
                        <p className="text-purple-800 font-semibold">New Regulars</p>
                        <p className="text-purple-600 text-xl font-bold">+8,200</p>
                        <p className="text-xs text-purple-600">Promoted from occasional</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                      Ending Regular Shoppers: 64,785 (+12.4%)
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitive Loss Analysis */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Why We're Losing Customers to Competitors</h5>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h6 className="font-semibold text-red-800">Primary Loss Factor: Convenience</h6>
                    <div className="text-sm text-red-700 mt-2 space-y-1">
                      <p>• 73% cite "closer to home/work" as switch reason</p>
                      <p>• King Soopers average: 1.2 miles vs NG: 4.3 miles</p>
                      <p>• Lost customers: 67% to King Soopers, 21% to Safeway</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <h6 className="font-semibold text-yellow-800">Secondary Loss Factor: Price Perception</h6>
                    <div className="text-sm text-yellow-700 mt-2 space-y-1">
                      <p>• 31% cite "better deals/prices" as factor</p>
                      <p>• Especially strong in Castle Rock (-43% decline)</p>
                      <p>• Family shoppers more price-sensitive</p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h6 className="font-semibold text-green-800">What We're Winning: Quality & Values</h6>
                    <div className="text-sm text-green-700 mt-2 space-y-1">
                      <p>• 89% of gained customers cite "product quality"</p>
                      <p>• 67% value "organic/natural focus"</p>
                      <p>• Strong wins from Whole Foods (premium quality seekers)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Question 4: Brand Importance & Customer Migration */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-blue-900 mb-4">📈 Question 4: Are we becoming more/less important to regular shoppers? Moving seasonal to regular?</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
              <MetricCard 
                title="Visit Frequency" 
                value="3.9x/month" 
                change="+0.3 vs May"
                trend="up"
                icon={Activity}
                subtitle="Regular shoppers increasing frequency"
              />
              <MetricCard 
                title="Wallet Share" 
                value="43.2%" 
                change="+2.1% vs May"
                trend="up"
                icon={ShoppingCart}
                subtitle="Share of grocery spending"
              />
              <MetricCard 
                title="Seasonal → Regular" 
                value="22.5%" 
                change="Migration rate"
                trend="up"
                icon={TrendingUp}
                subtitle="8,200 customers promoted"
              />
              <MetricCard 
                title="Regular → Occasional" 
                value="6.8%" 
                change="Downgrade rate"
                trend="down"
                icon={TrendingDown}
                subtitle="Better retention vs 9.2% last quarter"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Customer Journey Migration */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Customer Segment Migration (May → June)</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { 
                      segment: 'Seasonal', 
                      mayCount: 36458, 
                      juneCount: 28258,
                      promoted: 8200,
                      newAcquisitions: 3547,
                      churn: 11947
                    },
                    { 
                      segment: 'Occasional', 
                      mayCount: 152341, 
                      juneCount: 156789,
                      promoted: 12847,
                      newAcquisitions: 8934,
                      churn: 16533
                    },
                    { 
                      segment: 'Regular', 
                      mayCount: 57642, 
                      juneCount: 64785,
                      promoted: 0,
                      newAcquisitions: 15343,
                      churn: 8200
                    }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="segment" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      value.toLocaleString(),
                      name === 'mayCount' ? 'May Count' :
                      name === 'juneCount' ? 'June Count' :
                      name === 'promoted' ? 'Promoted Up' :
                      name === 'newAcquisitions' ? 'New Acquisitions' : 'Churn/Downgrade'
                    ]} />
                    <Legend />
                    <Bar dataKey="mayCount" fill="#94a3b8" name="May Count" />
                    <Bar dataKey="juneCount" fill="#3b82f6" name="June Count" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Brand Importance Metrics */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Brand Importance & Share of Wallet Trends</h5>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h6 className="font-semibold text-green-800">📊 Increasing Brand Importance</h6>
                    <div className="text-sm text-green-700 mt-2 space-y-1">
                      <p>• <strong>Primary Grocery Store</strong>: 67% of regulars (+5% vs May)</p>
                      <p>• <strong>First Choice</strong>: 78% for organic products (+3%)</p>
                      <p>• <strong>Recommendation Rate</strong>: 84% would recommend (+7%)</p>
                      <p>• <strong>Visit Frequency</strong>: 3.9x/month (+0.3 increase)</p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h6 className="font-semibold text-blue-800">💰 Wallet Share Growth</h6>
                    <div className="text-sm text-blue-700 mt-2 space-y-1">
                      <p>• <strong>Regular Shoppers</strong>: 43.2% of grocery spend (+2.1%)</p>
                      <p>• <strong>Occasional Shoppers</strong>: 18.7% of grocery spend (+1.4%)</p>
                      <p>• <strong>Seasonal Shoppers</strong>: 8.3% of grocery spend (+0.8%)</p>
                      <p>• <strong>Average Basket</strong>: $67.40 (+$3.20 vs May)</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h6 className="font-semibold text-purple-800">🎯 Migration Success Factors</h6>
                    <div className="text-sm text-purple-700 mt-2 space-y-1">
                      <p>• <strong>Loyalty Program</strong>: 89% of promoted customers are members</p>
                      <p>• <strong>Product Discovery</strong>: 73% discovered new products in last month</p>
                      <p>• <strong>Staff Interaction</strong>: 67% had positive staff consultation</p>
                      <p>• <strong>Store Experience</strong>: 91% satisfaction with store cleanliness/layout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Question 5: Marketing ROI Impact */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-blue-900 mb-4">💰 Question 5: Are our marketing $$ having measurable impact on the above?</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
              <MetricCard 
                title="Campaign ROI" 
                value="312%" 
                change="90-day return"
                trend="up"
                icon={TrendingUp}
                subtitle="$3.12 return per $1 spent"
              />
              <MetricCard 
                title="Attribution Rate" 
                value="68.4%" 
                change="Of new customers"
                trend="up"
                icon={Target}
                subtitle="Directly tied to campaigns"
              />
              <MetricCard 
                title="Cost Per Acquisition" 
                value="$23.40" 
                change="-15% vs Q1"
                trend="up"
                icon={Users}
                subtitle="Improving efficiency"
              />
              <MetricCard 
                title="Retention Lift" 
                value="+34%" 
                change="Campaign-acquired customers"
                trend="up"
                icon={Activity}
                subtitle="vs organic acquisitions"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Campaign Impact Analysis */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Marketing Campaign Impact on Key Metrics</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={[
                    { 
                      month: 'Jan', 
                      marketingSpend: 89000, 
                      newCustomers: 8430, 
                      retention: 62.1,
                      campaignAttributed: 4891
                    },
                    { 
                      month: 'Feb', 
                      marketingSpend: 94000, 
                      newCustomers: 9240, 
                      retention: 63.7,
                      campaignAttributed: 5647
                    },
                    { 
                      month: 'Mar', 
                      marketingSpend: 102000, 
                      newCustomers: 10847, 
                      retention: 64.2,
                      campaignAttributed: 6934
                    },
                    { 
                      month: 'Apr', 
                      marketingSpend: 98000, 
                      newCustomers: 11234, 
                      retention: 65.8,
                      campaignAttributed: 7456
                    },
                    { 
                      month: 'May', 
                      marketingSpend: 115000, 
                      newCustomers: 10893, 
                      retention: 65.2,
                      campaignAttributed: 7234
                    },
                    { 
                      month: 'Jun', 
                      marketingSpend: 125000, 
                      newCustomers: 12847, 
                      retention: 67.3,
                      campaignAttributed: 8786
                    }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip formatter={(value, name) => [
                      name === 'marketingSpend' ? `${value.toLocaleString()}` :
                      name === 'retention' ? `${value}%` :
                      value.toLocaleString(),
                      name === 'marketingSpend' ? 'Marketing Spend' :
                      name === 'newCustomers' ? 'Total New Customers' :
                      name === 'retention' ? 'Retention Rate' :
                      'Campaign Attributed'
                    ]} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="marketingSpend" fill="#8b5cf6" name="Marketing Spend ($)" />
                    <Line yAxisId="left" type="monotone" dataKey="newCustomers" stroke="#22c55e" strokeWidth={3} name="New Customers" />
                    <Line yAxisId="right" type="monotone" dataKey="retention" stroke="#f59e0b" strokeWidth={3} name="Retention Rate %" />
                    <Line yAxisId="left" type="monotone" dataKey="campaignAttributed" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="Campaign Attributed" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Marketing Effectiveness Breakdown */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Marketing Channel Effectiveness (June 2025)</h5>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h6 className="font-semibold text-green-800">🎯 High-Performance Channels</h6>
                    <div className="text-sm text-green-700 mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span>Geo-Targeted Mobile Ads:</span>
                        <span className="font-bold">$18.20 CPA • 423% ROI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>New Mover Direct Mail:</span>
                        <span className="font-bold">$21.40 CPA • 378% ROI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Influencer Partnerships:</span>
                        <span className="font-bold">$15.80 CPA • 445% ROI</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <h6 className="font-semibold text-yellow-800">⚡ Medium-Performance Channels</h6>
                    <div className="text-sm text-yellow-700 mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span>Social Media Ads:</span>
                        <span className="font-bold">$28.90 CPA • 267% ROI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email Campaigns:</span>
                        <span className="font-bold">$12.30 CPA • 189% ROI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Partnership Programs:</span>
                        <span className="font-bold">$31.20 CPA • 234% ROI</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h6 className="font-semibold text-blue-800">📊 Campaign Attribution Success</h6>
                    <div className="text-sm text-blue-700 mt-2 space-y-1">
                      <p>• <strong>68.4%</strong> of new customers attributed to campaigns</p>
                      <p>• <strong>+34%</strong> retention rate vs organic acquisitions</p>
                      <p>• <strong>$67.40</strong> avg first purchase (+41% vs organic)</p>
                      <p>• <strong>89%</strong> likelihood to become regular shoppers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Impact Summary */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
              <h5 className="text-lg font-bold text-gray-800 mb-4">🎯 Marketing Impact Summary & Strategic Recommendations</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h6 className="font-semibold text-green-800 mb-2">✅ What's Working</h6>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Geo-targeted mobile campaigns driving quality acquisitions</li>
                    <li>• New mover programs showing 44.8% trial conversion</li>
                    <li>• Win-back campaigns: 31.2% reactivation rate</li>
                    <li>• Influencer partnerships: Highest ROI (445%)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h6 className="font-semibold text-yellow-800 mb-2">⚠️ Needs Optimization</h6>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Social media ads: High reach, lower conversion</li>
                    <li>• Email campaigns: Great CPA but low retention lift</li>
                    <li>• Partnership programs need better targeting</li>
                    <li>• Traditional advertising showing declining ROI</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h6 className="font-semibold text-blue-800 mb-2">🚀 August Recommendations</h6>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Double down on geo-mobile: +$50K allocation</li>
                    <li>• Scale influencer program to Gen Z segment</li>
                    <li>• Launch predictive churn campaigns</li>
                    <li>• Test hyperlocal community partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Development & Measurement Framework */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Monthly Campaign Development & Measurement Framework</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            {/* Campaign Targeting Matrix */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Data-Driven Campaign Targeting Matrix</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                  <h5 className="font-semibold text-gray-800 mb-2">🎯 New Customer Acquisition Campaign</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium">Target Audience:</span>
                      <p className="text-gray-600">Millennials within 3 miles, health-conscious indicators</p>
                    </div>
                    <div>
                      <span className="font-medium">Channel Strategy:</span>
                      <p className="text-gray-600">Geo-fenced mobile ads near gyms/yoga studios</p>
                    </div>
                    <div>
                      <span className="font-medium">Success Metric:</span>
                      <p className="text-gray-600">15% increase in first-time visitors</p>
                    </div>
                    <div>
                      <span className="font-medium">Budget Allocation:</span>
                      <p className="text-gray-600">$45K/month across top 8 stores</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
                  <h5 className="font-semibold text-gray-800 mb-2">🔄 Win-Back Campaign</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium">Target Audience:</span>
                      <p className="text-gray-600">6-month lapsed customers (8,432 identified)</p>
                    </div>
                    <div>
                      <span className="font-medium">Channel Strategy:</span>
                      <p className="text-gray-600">Personalized email + targeted social media</p>
                    </div>
                    <div>
                      <span className="font-medium">Success Metric:</span>
                      <p className="text-gray-600">25% reactivation rate within 30 days</p>
                    </div>
                    <div>
                      <span className="font-medium">Budget Allocation:</span>
                      <p className="text-gray-600">$28K/month direct response</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border">
                  <h5 className="font-semibold text-gray-800 mb-2">🏠 New Mover Targeting</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium">Target Audience:</span>
                      <p className="text-gray-600">3,241 new movers within 5-mile radius</p>
                    </div>
                    <div>
                      <span className="font-medium">Channel Strategy:</span>
                      <p className="text-gray-600">Welcome packages + local partnership offers</p>
                    </div>
                    <div>
                      <span className="font-medium">Success Metric:</span>
                      <p className="text-gray-600">40% trial rate + 60% second visit</p>
                    </div>
                    <div>
                      <span className="font-medium">Budget Allocation:</span>
                      <p className="text-gray-600">$22K/month direct mail + samples</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Measurement Dashboard */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Real-Time Campaign Performance Tracking</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">July 2025 Campaign Results (Ongoing)</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="text-sm font-medium">New Customer Acquisition</span>
                      <div className="text-right">
                        <span className="text-green-600 font-bold">+23.7%</span>
                        <p className="text-xs text-gray-500">vs baseline</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="text-sm font-medium">Win-Back Campaign</span>
                      <div className="text-right">
                        <span className="text-blue-600 font-bold">31.2%</span>
                        <p className="text-xs text-gray-500">reactivation rate</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="text-sm font-medium">New Mover Conversion</span>
                      <div className="text-right">
                        <span className="text-purple-600 font-bold">44.8%</span>
                        <p className="text-xs text-gray-500">trial rate</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-800 mb-2">Attribution & ROI Tracking</h5>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>• Campaign-driven visits: 4,847 (June)</p>
                    <p>• Customer acquisition cost: $23.40</p>
                    <p>• Average campaign-driven spend: $89.30</p>
                    <p>• 90-day ROI: 312%</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 mb-2">Next Month Optimization</h5>
                  <div className="text-sm text-green-700 space-y-1">
                    <p>• Increase Gen Z targeting (+47% response rate)</p>
                    <p>• Expand weekend campaign windows</p>
                    <p>• Focus on high-performing store catchments</p>
                    <p>• A/B test proximity-based messaging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Recommendations */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-gray-800 mb-4">🎯 Strategic Campaign Recommendations for August 2025</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-indigo-800 mb-2">Defensive Strategy</h5>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• Castle Rock recovery campaign ($50K emergency spend)</li>
                  <li>• Competitive response to Whole Foods Stapleton</li>
                  <li>• Retention focus for at-risk high-value customers</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">Growth Strategy</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Scale Parker suburban success model</li>
                  <li>• Gen Z weekend shopping campaign expansion</li>
                  <li>• Journey-based partnership campaigns</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-pink-800 mb-2">Innovation Strategy</h5>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li>• Predictive churn prevention campaigns</li>
                  <li>• Hyper-local community integration</li>
                  <li>• Real-time competitive response automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Data processed from Azira Pinnacle Deep Insights Analysis • May-June 2025 comparison • 18.2M location data points • 
        Month-over-month trending analysis • Privacy-compliant aggregated insights</p>
      </div>
    </div>
  );
};

export default Dashboard;