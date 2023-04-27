/**
 * Project Title: FoodFeast - Full Stack Web Application
 * 
 * Filename: RoutesManager.jsx
 * Created on: 04/23
 * Author(s): Abbas M.
 * Contact: amahdavi2@sfsu.edu
 * Copyright (c) 2023 by San Francisco State University
 * 
 * Description: Main file that manages all the routes using BrowseRoutes
 *    import every parent component and create a route, and assign
 *    the components as elements to every specific route.
 * 
 *    Renders NavBar and Footer as a sandwich buns around all other links.
 * 
 *    Admin isUnique link, as it renders the admin dashboard, and does not need Nav/Footer.
 * 
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Map from '../pages/Map';
import AdminLogin from '../pages/AdminLogin';
import Admin from '../pages/Admin';
import Driver from '../pages/Driver';
import EnrollRestaurant from '../pages/EnrollRestaurant';
import AddMenuItems from '../pages/AddMenuItems';
import ThankYouForEnrolling from '../pages/ThankYouForEnrolling';
import RestaurantDashboard from '../pages/RestaurantDashboard';
import TestCreateOrder from '../pages/TestCreateOrder';
import {Cart} from '../pages/Cart';
import RestaurantOrders from '../pages/RestaurantOrders';

import TeamMemberModal from "../components/TeamMemberModel";
import teamMembers from '../components/teamMembers';
import Restaurant from '../pages/Restaurant';
import MenuEntry from '../pages/MenuEntry';
import AddedItem from '../pages/AddedItem';

function RoutesManager() {

  const isUnique = window.location.pathname === "/admin";

  return (
    <BrowserRouter>
      {!isUnique && <Navbar />}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About teamMembers={teamMembers} />} />
        <Route path="/map" element={<Map />} />
        
        <Route path="/driver" element={<Driver />} />
        <Route path="/enroll" element={<EnrollRestaurant />} />
        <Route path="/addMenuItems/:restaurantId" element={<AddMenuItems />} />
        <Route path="/thankyouforenrolling" element={<ThankYouForEnrolling />} />
        <Route path="/restaurantDashboard" element={<RestaurantDashboard />} />
        <Route path="/restaurantOrders" element={<RestaurantOrders />} />
        <Route path="/testCreateOrder" element={<TestCreateOrder />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/menuentry/:restaurantId" element={<MenuEntry />}/>
        <Route path="/addeditem" element={<AddedItem />}/>

        <Route path="/admin" element={<Admin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {teamMembers.map((member) => (
          <Route key={member.id}
            path={`/team/${member.name.replace(/\s/g, '-')}`}
            element={<TeamMemberModal teamMember={member} />} />
        ))}

        <Route path="/:name/:id" element={<Restaurant />} />


      </Routes>
      {!isUnique &&  <Footer />}
    </BrowserRouter>
  );
}

export default RoutesManager;