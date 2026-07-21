'use client';

export default function Footer() {
  return (
    <footer className="bg-ps-navy-900 text-white border-t border-ps-navy-700 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-gray-300 text-sm">Police Scotland Knowledge Base for operational procedures and training.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Operational Procedures</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">State Codes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Training</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Feedback</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ps-navy-700 pt-8 flex justify-between items-center text-sm text-gray-300">
          <p>&copy; 2026 Police Scotland. All rights reserved.</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </footer>
  );
}
