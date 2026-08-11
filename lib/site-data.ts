import type { LucideIcon } from 'lucide-react'
import {
  CalendarCheck,
  ClipboardCheck,
  Droplet,
  Droplets,
  Handshake,
  Hammer,
  Leaf,
  Lightbulb,
  MessageCircle,
  PaintRoller,
  Paintbrush,
  PiggyBank,
  Ruler,
  Scissors,
  Shovel,
  Sprout,
  TreeDeciduous,
  DoorOpen,
  Blinds,
  PanelsTopLeft,
} from 'lucide-react'

export const siteConfig = {
  name: 'LS Roots & Branch',
  tagline: 'Handyman & Gardening',
  location: 'Spalding, Lincolnshire',
  serviceArea: 'Spalding & surrounding areas',
  email: 'lsrootandbranch@gmail.com',
  facebook: 'LS Roots&Branch',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export type Service = {
  icon: LucideIcon
  name: string
  description: string
}

export const gardeningServices: Service[] = [
  { icon: Sprout, name: 'Lawn Cutting', description: 'Regular mowing to keep your lawn neat and healthy.' },
  { icon: Scissors, name: 'Hedge Trimming', description: 'Tidy, well-shaped hedges all year round.' },
  { icon: Leaf, name: 'Garden Tidy / Leaf Clearance', description: 'A fresh, clutter-free garden in no time.' },
  { icon: Shovel, name: 'Weeding & Maintenance', description: 'Keeping borders and beds looking their best.' },
  { icon: PaintRoller, name: 'Fence Painting', description: 'Fresh coats to protect and refresh your fencing.' },
  { icon: Droplets, name: 'Garden Clearance', description: 'Overgrown or unused spaces cleared and tidied.' },
  { icon: TreeDeciduous, name: 'Small Tree / Shrub Pruning', description: 'Careful pruning to keep growth healthy.' },
  { icon: Droplet, name: 'Jet Washing', description: 'Patios, paths and driveways refreshed and clean.' },
]

export const handymanServices: Service[] = [
  { icon: PanelsTopLeft, name: 'Flat Pack Assembly', description: 'Furniture built properly, without the hassle.' },
  { icon: Ruler, name: 'Picture / Shelf Hanging', description: 'Straight, secure hanging every time.' },
  { icon: DoorOpen, name: 'Door Fitting / Adjustments', description: 'Doors fitted, aligned and working smoothly.' },
  { icon: Lightbulb, name: 'Light Fitting', description: 'Safe, tidy fitting of lights and fixtures.' },
  { icon: Blinds, name: 'Curtain Pole Fitting', description: 'Poles fitted securely and levelled correctly.' },
  { icon: Droplet, name: 'Silicone Sealing', description: 'Neat sealing around kitchens and bathrooms.' },
  { icon: Paintbrush, name: 'Minor Painting & Touch Ups', description: 'Small painting jobs finished neatly.' },
  { icon: Hammer, name: 'Skirting Board Installation', description: 'Skirting boards fitted for a finished look.' },
]

export type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: Leaf,
    title: 'Local & Reliable',
    description: 'Friendly service from your local handyman and gardening team.',
  },
  {
    icon: Handshake,
    title: 'Friendly & Trustworthy',
    description: 'Professional, approachable and committed to doing a great job.',
  },
  {
    icon: PiggyBank,
    title: 'Competitive Prices',
    description: 'Affordable solutions for everyday home and garden jobs.',
  },
  {
    icon: ClipboardCheck,
    title: 'Free Quotes',
    description: "Get in touch and tell us what you need — we'll provide a free quote.",
  },
]

export const trustItems = [
  { icon: Sprout, label: 'No Job Too Small' },
  { icon: PiggyBank, label: 'Competitive Prices' },
  { icon: Handshake, label: 'Quality & Reliable Work' },
  { icon: ClipboardCheck, label: 'Free Quotes Available' },
]

export const howItWorks = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Tell Us What You Need',
    description: 'Send us a message and let us know what job you have in mind.',
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'Get Your Free Quote',
    description: "We'll discuss the work and provide a quote.",
  },
  {
    step: '03',
    icon: CalendarCheck,
    title: 'Let Us Get To Work',
    description: "Once everything is agreed, we'll arrange a convenient time to help.",
  },
]
