# the video that take the code from it: 

[the video](https://www.youtube.com/watch?v=G-Cr00UYokU&t=142s)

`
--transition: all 400ms ease;
`
- This line defines a CSS custom property (also known as a CSS variable) named --transition.
- all: This means that all properties of the element that can transition will do so.
- 400ms: This specifies the duration of the transition, which is 400 milliseconds.
- ease: This is the timing function for the transition, which determines how the speed of the transition changes over time. The ease function starts slow, speeds up, and then slows down again at the end.

## Used in it: 
- [React Icons](https://react-icons.github.io/react-icons/)



## packages the used in the project:

- [React Icons] -> npm install react-icons --save

### the image
- that is used in the portfolio section is from: 
- [dribbble](https://dribbble.com/Alien_Pixels)

## for the testimonial slide
- [slides](https://swiperjs.com/)
- npm i swiper

## send email from your contact form: 
- [email.js](https://www.emailjs.com/)
- Send Email Directly From Your Code
  1. sign up.
  2. add new services.
  3. choose what service you want (in our code now choose Gmail).
  4. you can name it what you want, live the service id as it 
  5. click connect account, then choose the email you want to connect with it, click continue.
  6. click create service.

- then create email templates:
  1. from the email templates in the sideMenu.
  2. choose create new template.
  3. we can write the what we want subject (like message from react portfolio). (if we put {{{subject}}} it will take the subject name from the form in the react project).
  4. in the content area we can put the template to how the message will be when it received.
  5. it will take it's content from the form in the project like this:
  ```
  {{{name}}}
  {{{email}}}
  {{{message}}}
  ``` 
  6. like the inputs fields in the react form.
  7. click save button.
  8. we can test it by clicking test it button.

## react email js:
- [react emailjs](https://www.emailjs.com/docs/examples/reactjs/)
- npm install emailjs-com --save
- import the code we need from the like above.
``` emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current , 'YOUR_USER_ID')
``` 
- we take is information the emailjs we created it.
- YOUR_USER_ID -> emailjs.com -> integration -> API -> api keys -> user ID 
- and from the contact form from the project test it.

******
## Deployment the code:
- in the package.json file under the "name" this line code 
` "homepage": "http://egatortutorials.com" // domain name`
- npm run build
- compress the build file to zip file.
- log in or sign up to hostinger.com 
   [hostinger](https://hpanel.hostinger.com)
- the completed steps in this link:
    [hostinger deployment](https://www.youtube.com/watch?v=G-Cr00UYokU&t=11930s)