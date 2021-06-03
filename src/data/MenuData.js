export const menuData = {
    home: [],
    packages: [
        {type:'link', title: 'Search 1' ,link: '/packages/search1'},
        {type:'link', title: 'Search 2' ,link: '/packages/search2'},
        {
            type:'parent', title: 'Tour Package',
            children: [
                {type:'link', title: 'Carousel' ,link: '/carousel'},
                {type:'link', title: 'Custom Map' ,link: '/custom-map'},
                {type:'link', title: '360° Panorama' ,link: '/360panorama'},
                {type:'link', title: 'Default' ,link: '/default'},
            ]
        },
        {type:'link', title: 'Destination' ,link: '/destination'},
        {type:'link', title: 'Typology' ,link: '/typology'},
    ],
    shop: [
        {type:'link', title: 'Archive' ,link: '/archive'},
        {type:'link', title: 'Single Product' ,link: '/single-product'},
        {type:'link', title: 'Cart' ,link: '/cart'},
        {type:'link', title: 'Checkout' ,link: '/checkout'},   
    ],
    aboutUs: [
        {type:'link', title: 'About Us' ,link: '/about-us'},
        {type:'link', title: 'About Us 2' ,link: '/about-us-2'},
        {type:'link', title: 'About Us 3' ,link: '/about-us-3'},
    ],
    pages: [
        {type:'link', title: 'Services' ,link: '/services'},
        {type:'link', title: 'Agency Tour' ,link: '/agency-tour'},
        {type:'link', title: 'Testimonials' ,link: '/testimonials'},
        {type:'link', title: 'Prices' ,link: '/prices'},
        {type:'link', title: 'Promotions' ,link: '/promotions'},
        {type:'link', title: 'Faq' ,link: '/faq'},
        {type:'link', title: 'Coming Soon' ,link: '/coming-soon'},
        {
            type:'parent', title: 'About Us',
            children: [
                {type:'link', title: 'About Us 1' ,link: '/about-us-1'},
                {type:'link', title: 'About Us 2' ,link: '/about-us-2'},
                {type:'link', title: 'About Us 3' ,link: '/about-us-3'},
            ]
        },
        {
            type:'parent', title: 'Contact',
            children: [
                {type:'link', title: 'Contact 1' ,link: '/contact-1'},
                {type:'link', title: 'Contact 2' ,link: '/contact-2'},
            ]
        },
    ],
    news : [
        {type:'link', title: 'Archive' ,link: '/archive'},
        {
            type:'parent', title: 'Single Post',
            children: [
                {type:'link', title: 'Full Width' ,link: '/full-width'},
                {type:'link', title: 'Right SideBar' ,link: '/right-sidebar'},
                {type:'link', title: 'Left SideBar' ,link: '/left-sideBar'},
            ]
        },
    ],
    contact : [
        {type:'link', title: 'Contact 1' ,link: '/contact-1'},
        {type:'link', title: 'Contact 2' ,link: '/contact-2'},
    ],
}