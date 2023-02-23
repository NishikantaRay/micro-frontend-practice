import Faker from 'faker';





const mount = (el) => {
    const cartText = `<div>You have ${Faker.random.number()} items in your cart</div>`;
    el.innerHTML = cartText;
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-cart'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    
    // Assuming our container doesn't have an element
    // with id 'dev-cart'....
    if (el) {
        // We are probably running in isolation
        mount(el);
    }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-cart' exists
// WE DO NOT WANT try to immediately render the app
export { mount };
