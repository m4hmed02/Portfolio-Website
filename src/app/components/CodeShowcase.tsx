import { motion } from "motion/react";
import { useState } from "react";

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState("react");

  const codeSnippets = {
    react: `// React Component with Hooks
import { useState, useEffect } from 'react';

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      {loading ? <Spinner /> : <UserList users={users} />}
    </div>
  );
}`,
    node: `// Express.js API with Authentication
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ 
        message: 'Invalid credentials' 
      });
    }

    const isValid = await bcrypt.compare(
      password, 
      user.password
    );
    
    if (!isValid) {
      return res.status(401).json({ 
        message: 'Invalid credentials' 
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});`,
    mongodb: `// MongoDB Schema and Model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: 100
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'clothing', 'books']
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Add indexes for better performance
productSchema.index({ name: 'text' });
productSchema.index({ category: 1, price: 1 });

module.exports = mongoose.model('Product', productSchema);`
  };

  const tabs = [
    { id: "react", label: "React" },
    { id: "node", label: "Node.js" },
    { id: "mongodb", label: "MongoDB" }
  ];

  return (
    <section className="py-20 bg-gray-900 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Code Quality
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Clean, maintainable, and production-ready code
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 rounded-2xl p-6 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="overflow-x-auto">
              <code className="text-sm text-gray-300" style={{ fontFamily: "'Monaco', 'Courier New', monospace" }}>
                {codeSnippets[activeTab as keyof typeof codeSnippets]}
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
