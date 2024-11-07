// src/routes.ts

// Import Hono
import { Hono } from 'hono';

// Import controllers
import {
    getPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
} from '../controllers/PostController';

import {
    getVehicleBrands,
    createVehicleBrand,
    getVehicleBrandById,
    updateVehicleBrand,
    deleteVehicleBrand,
} from '../controllers/VehicleBrandController';

import {
    getVehicleModels,
    createVehicleModel,
    getVehicleModelById,
    updateVehicleModel,
    deleteVehicleModel,
} from '../controllers/VehicleModelController';

// Initialize router
const router = new Hono();

// Routes for posts
router.get('/posts', (c) => getPosts(c));                  // Get all posts
router.post('/posts', (c) => createPost(c));               // Create a new post
router.get('/posts/:id', (c) => getPostById(c));           // Get post by ID
router.patch('/posts/:id', (c) => updatePost(c));          // Update a post
router.delete('/posts/:id', (c) => deletePost(c));         // Delete a post

// Routes for vehicle brands
router.get('/vehicle-brands', (c) => getVehicleBrands(c));                  // Get all vehicle brands
router.post('/vehicle-brands', (c) => createVehicleBrand(c));               // Create a new vehicle brand
router.get('/vehicle-brands/:id', (c) => getVehicleBrandById(c));           // Get vehicle brand by ID
router.patch('/vehicle-brands/:id', (c) => updateVehicleBrand(c));          // Update vehicle brand
router.delete('/vehicle-brands/:id', (c) => deleteVehicleBrand(c));         // Delete vehicle brand

// Routes for vehicle models
router.get('/vehicle-models', (c) => getVehicleModels(c));                // Get all vehicle models
router.post('/vehicle-models', (c) => createVehicleModel(c));             // Create a new vehicle model
router.get('/vehicle-models/:id', (c) => getVehicleModelById(c));         // Get vehicle model by ID
router.patch('/vehicle-models/:id', (c) => updateVehicleModel(c));        // Update vehicle model
router.delete('/vehicle-models/:id', (c) => deleteVehicleModel(c));       // Delete vehicle model


// Export routes
export const Routes = router;