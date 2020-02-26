import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// PAGES
import ContactPage from '../pages/ContactPage'
import EventsPage from '../pages/EventsPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ShopPage from '../pages/ShopPage'

// COMPONENTS
import Header from '../components/Header/Header'

const AppRouter = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/event" component={EventsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
)

export default AppRouter
