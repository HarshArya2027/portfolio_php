# Harsh Arya - Portfolio Website

![Portfolio Screenshot](./assets/images/screenshot.png)

A professional portfolio website for Harsh Arya, a 3rd-year Computer Science Engineering student at Chandigarh Group of Colleges, Landran, Mohali.

## Features

- Responsive design using Tailwind CSS
- Four main pages: Home, Skills, About, and Contact
- PHP backend for contact form submissions
- MySQL database integration
- Interactive JavaScript functionality
- Mobile-friendly navigation

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- PHP
- MySQL

## Pages

1. **Home** - Landing page with featured projects and introduction
2. **Skills** - Detailed showcase of technical skills in web development, cybersecurity, and AI/ML
3. **About** - Personal background, education timeline, and interests
4. **Contact** - Contact form with PHP processing and Google Maps integration

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harsharya/portfolio.git
   ```

2. Import the database:
   ```bash
   mysql -u username -p harsharya_portfolio < database.sql
   ```

3. Configure the database connection in `process_contact.php`:
   ```php
   $db_host = 'localhost';
   $db_user = 'your_username';
   $db_pass = 'your_password';
   $db_name = 'harsharya_portfolio';
   ```

4. Deploy to your web server.

## Configuration

- Update personal information in all HTML files
- Replace placeholder images in `assets/images/`
- Configure SMTP settings in `process_contact.php` if you want email notifications

## License

This project is open-source and available under the MIT License.

## Contact

Harsh Arya  
Chandigarh Group of Colleges, Landran, Mohali  
Email: harsharya@example.com  
Phone: +91 98765 43210