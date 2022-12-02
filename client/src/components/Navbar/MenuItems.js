import React from 'react';
import Icon from '../icons'

export const MenuItems = [
    {
        title: 'Plan a Trip',
        url: '/Home',
        cName: 'nav-links',
        icon: <Icon className="fa-solid fa-house"></Icon>
    },
    {
        title: 'My Saved Trips',
        url: '/mysavedtrips',
        cName: 'nav-links',
        icon: <Icon className="fa-solid fa-person-walking-luggage"></Icon>
    },
    {
        title: 'Digital Nomad Visas',
        url: '/digitalnomadvisas',
        cName: 'nav-links',
        icon: <Icon className="fa-solid fa-passport"></Icon>

    },
    {
        title: 'Language Practice',
        url: '/languagepractice',
        cName: 'nav-links',
        icon: <Icon className="fa-solid fa-language"></Icon>
    },
    {
        title: 'Sign Out',
        url: '/signout',
        cName: 'nav-links-mobile',
        icon: <Icon className="fa-solid fa-sign-out"></Icon>
    },
];