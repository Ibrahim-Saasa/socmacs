import React from "react";
import {
  NavBar,
  Hero,
  Features,
  TeamFacilities,
  Events,
  SocialFeed,
  CallToAction,
  Footer,
} from "./components/sections";

const App: React.FC = () => {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Team", href: "#team" },
    { label: "Events", href: "#events" },
    { label: "Social", href: "#social" },
    { label: "Contact", href: "#footer" },
  ];

  const features = [
    {
      title: "World-Class Education",
      description:
        "Excellence-focused curriculum designed by industry experts and academic leaders.",
      icon: "🎓",
    },
    {
      title: "Modern Facilities",
      description:
        "State-of-the-art infrastructure and technology for optimal learning experience.",
      icon: "🏢",
    },
    {
      title: "Expert Faculty",
      description:
        "Experienced professors committed to student success and academic excellence.",
      icon: "👨‍🏫",
    },
    {
      title: "Career Growth",
      description:
        "Comprehensive placement support and career development programs.",
      icon: "📈",
    },
  ];

  const facilities = [
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      title: "Smart Classrooms",
      description:
        "State-of-the-art learning environments with advanced technology integration.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      title: "Library & Resources",
      description:
        "Comprehensive collection of books, journals, and digital resources.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop",
      title: "Sports & Recreation",
      description:
        "World-class facilities for sports, wellness, and recreational activities.",
    },
  ];

  const events = [
    {
      date: "Apr 15",
      title: "Spring Cultural Festival",
      description:
        "Annual celebration featuring music, dance, and cultural performances.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      location: "Main Campus",
    },
    {
      date: "Apr 20",
      title: "Hackathon 2026",
      description:
        "24-hour coding competition with amazing prizes and networking.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      location: "Tech Lab",
    },
    {
      date: "Apr 25",
      title: "Leadership Summit",
      description: "Inspiring talks from industry leaders and innovators.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      location: "Auditorium",
    },
  ];

  const socialPosts = [
    {
      author: "Campus Life",
      timestamp: "2 hours ago",
      content:
        "Amazing turnout at our annual sports day! Great spirit and teamwork from all participants! 🏆",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
      badge: true,
    },
    {
      author: "Research Team",
      timestamp: "5 hours ago",
      content:
        "Our students won the national innovation competition! Congratulations to the entire team! 🎉",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      badge: true,
    },
    {
      author: "Student Council",
      timestamp: "1 day ago",
      content:
        "Save the date for our upcoming cultural festival featuring performances from around the world.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      badge: true,
    },
  ];

  const footerColumns = [
    {
      title: "Programs",
      links: [
        { label: "Undergraduate", href: "#" },
        { label: "Postgraduate", href: "#" },
        { label: "Research", href: "#" },
        { label: "Online Learning", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#" },
        { label: "Admission", href: "#" },
        { label: "Campus Map", href: "#" },
        { label: "Student Portal", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Library", href: "#" },
        { label: "Career Services", href: "#" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <NavBar logo="/logo.jpg" logoText="SOCMACS" links={navLinks} />

      <Hero
        headline="Shaping Future Leaders"
        subheadline="Excellence in Education, And Opportunity"
        ctaText="Explore More"
        backgroundImage="/hero.png"
        backgroundGradient={false}
      />

      <Features title="Why Choose Us" features={features} columns={4} />

      <TeamFacilities
        title="Campus Facilities"
        subtitle="World-class infrastructure supporting your educational journey"
        facilities={facilities}
        columns={3}
      />

      <Events title="Upcoming Events" events={events} columns={3} />

      <SocialFeed title="Campus Life" posts={socialPosts} columns={3} />

      <CallToAction
        title="Ready to Transform Your Future?"
        description="Join thousands of students making a difference at our world-class institution."
        ctaText="Apply Now"
        ctaLink="#"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#"
        background="gradient"
      />

      <Footer
        logoText="SOCMACS"
        description="A premier institute committed to excellence in education and holistic development."
        columns={footerColumns}
        copyright="© 2026 SOCMACS. All rights reserved."
      />
    </div>
  );
};

export default App;
