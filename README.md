Targets
Put JavaScript concepts into practice.
Learn to manipulate a data set.
Split our code into functions, and know how to reuse them.

A company in the e-commerce sector has asked us for a web application, which allows it to offer the purchase of its products via the internet.
You will be in charge of setting up an initial demo version of the application for the client: management of the shopping cart and the application of promotions on the final price.

Exercise 1
added function is called buy(), which receives the ID of the product to add. You must locate the product using this identifier received in the products array, then include it in the cart array.The buttons that should trigger the buy() function are the blue ones found on each product.
For each product that you want to add to the cart, we must validate if it has already been added previously, being part of the cart array :
If it doesn't exist, we add it to the cart array (make sure you don't forget to add the quantity property with value 1 to the product before pushing it). If, on the other hand, this product is already in the cart, we will have to increase the quantity field of this product in the cart.

Exercise 2
Now we will implement a function that allows the user to delete the array generated in the previous exercise: empty the cart .
On this occasion, you will have to fill in the cleanCart() function , which should reinitialize the cartList variable.

Exercise 3
calculate the total amount of the cart. 
A for loop must be implemented  to add up the amount of all the products.

Exercise 4
implement promotions,  a very important section in any store.

For this reason, he has specified two types of promotions that he wants for his e-commerce:
If the user buys 3 or more bottles of oil, the price of the product is reduced by 20%.
When buying 10 or more cake products, the price of the product is reduced by 30%.
In this exercise you must complete the applyPromotionsCart() function , which receives the cart array, modifying the subtotalWithDiscount field in case the promotion is applied. Everything must be dynamic.

Help: Since each product in the cart has a quantity, you can validate if a discount can be applied:

In case a product has a discount, the total price with discount must be saved in the field: subtotalWithDiscount.
If no discount is to be applied, you don't need to save anything.

Exercise 5
show the user the shopping cart .
The code responsible for displaying the shopping cart in the modal with id " cartModal ", must be included in the printCart() function. We give you the layout of the product table already created, you only need to modify it so that it is dynamic .
The cart mode is opened by pressing the cart button at the top right of the screen:

Exercise 6
implement the validation of the checkout form found in the checkout.js file.
To access this screen, you must click on the cart icon at the top right of the screen, a modal will appear with the button that will take you to this screen.
Your first goal will be to validate the  checkout.html form using the  checkout.js file

the logic so that the form fields meet the following conditions:
- All fields are required.
- All fields must have at least 3 characters.
- The first and last name must contain only letters.
- The phone must contain only numbers.
- The password must include numbers and letters.
- The email must have email format.

When the user enters a field that does not meet the above validations, the input should be highlighted in red and a message displayed at the bottom.
Help: You can color the border of the input red and show the error message by manipulating the dom, although you can also use bootstrap's is-invalid class.

Exercise 7
provided an essential functionality to the user: remove products from the cart.
You must complete the removeFromCart() function, which receives the id of the product for which the quantity should be decreased by one unit.
Remember that if the quantity of the product to be reduced is 1, you must remove it from the cart, not reduce its quantity to 0.

Exercise 8
layout the website so that it has a professional appearance: fixed navbar on top, added notice when product added and removed, added redirects to the sections and main page when on checkouts. 
