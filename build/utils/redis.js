"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = require("ioredis");
require('dotenv').config();
const redisClient = () => {
    if (process.env.REDIS_URL) {
        console.log(`Redis connected`);
        return process.env.REDIS_URL;
    }
    throw new Error('Redis connection failed');
};
exports.redis = new ioredis_1.Redis(redisClient());
//ABOVE IS THE OG CODE 
// import { Redis } from 'ioredis';
// require('dotenv').config();
// const redisClient = () => {
//     const url = process.env.REDIS_URL;
//     if (url) {
//         return new Redis(url, {
//             connectTimeout: 10000,
//             maxRetriesPerRequest: 20, // Consider lowering this
//             retryStrategy: (times) => {
//                 if (times >= 5) {
//                     return null; // Stop retrying after 5 attempts
//                 }
//                 return Math.min(times * 100, 5000); // Exponential backoff with a maximum delay
//             },
//              // Exponential backoff with longer delay
//             keepAlive: 10000,
//         });
//     }
//     throw new Error('Redis connection failed: REDIS_URL not found');
// };
// // Initialize Redis client
// export const redis = redisClient();
// // Set up error handling
// redis.on('error', (err) => {
//     console.error('Redis error:', err);
// });
// redis.on('connect', () => {
//     console.log('Redis connected');
// });
// redis.on('end', () => {
//     console.log('Redis connection closed');
// });
// redis.on('reconnecting', () => {
//     console.log('Attempting to reconnect to Redis...');
// });
