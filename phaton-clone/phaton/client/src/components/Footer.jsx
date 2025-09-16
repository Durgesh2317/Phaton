import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">

      
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Hot Items</a></li>
            <li><a href="#">Ebooks</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Report a Bug</a></li>
            <li><a href="#">Request a Feature</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:support@example.com">support@example.com</a></li>
            <li><a href="#">+1 234 567 890</a></li>
            <li><a href="#">123 Business Street</a></li>
            <li><a href="#">New York, USA</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Licensing</a></li>
            <li><a href="#">Cookies Policy</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 YourCompany. All rights reserved.
      </div>
    </footer>
  );
}
