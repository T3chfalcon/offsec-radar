import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';

const DataVisualization = ({ chartData }) => {
  const COLORS = ['#00FF88', '#FFB800', '#E53E3E', '#38A169', '#D69E2E', '#3182CE'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primary-800 border border-accent/30 rounded-lg p-3 shadow-lg">
          <p className="text-primary-foreground font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-accent">
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Intelligence Analytics
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real-time data visualization of tool discovery patterns, adoption trends, and threat landscape evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Tool Category Distribution */}
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-text-primary">Tool Category Distribution</h3>
              <Icon name="PieChart" size={20} className="text-accent" />
            </div>
            <div className="h-64" aria-label="Tool Category Distribution Pie Chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData.categoryDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Weekly Tool Discoveries */}
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-text-primary">Weekly Discoveries</h3>
              <Icon name="BarChart3" size={20} className="text-accent" />
            </div>
            <div className="h-64" aria-label="Weekly Tool Discoveries Bar Chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData.weeklyDiscoveries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="day" stroke="#4A5568" />
                  <YAxis stroke="#4A5568" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="tools" fill="#00FF88" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Adoption Velocity Trends */}
        <div className="bg-background rounded-xl p-6 border border-border mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-text-primary">Adoption Velocity Trends</h3>
            <Icon name="TrendingUp" size={20} className="text-accent" />
          </div>
          <div className="h-80" aria-label="Adoption Velocity Trends Line Chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData.adoptionTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#4A5568" />
                <YAxis stroke="#4A5568" />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="redTeam" 
                  stroke="#E53E3E" 
                  strokeWidth={3}
                  dot={{ fill: '#E53E3E', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="blueTeam" 
                  stroke="#3182CE" 
                  strokeWidth={3}
                  dot={{ fill: '#3182CE', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="osint" 
                  stroke="#38A169" 
                  strokeWidth={3}
                  dot={{ fill: '#38A169', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="malware" 
                  stroke="#D69E2E" 
                  strokeWidth={3}
                  dot={{ fill: '#D69E2E', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap items-center justify-center mt-4 space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-text-secondary">Red Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-text-secondary">Blue Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-text-secondary">OSINT</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-text-secondary">Malware Research</span>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {chartData.keyMetrics.map((metric, index) => (
            <div key={index} className="bg-background rounded-xl p-6 border border-border text-center">
              <div className="flex items-center justify-center mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.bgColor}`}>
                  <Icon name={metric.icon} size={24} className="text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-text-secondary mb-2">
                {metric.label}
              </div>
              <div className={`text-xs font-medium ${metric.changeColor}`}>
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;