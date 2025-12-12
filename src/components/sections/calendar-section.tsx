'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

export function CalendarSection() {
  const upcomingEvents = [
    {
      date: 'January 15, 2025',
      title: 'Spring 2025 Enrollment Opens',
      description: 'Early enrollment begins for all programs starting in Spring 2025',
      type: 'Enrollment',
      time: '9:00 AM',
      location: 'All Enrollment Centers'
    },
    {
      date: 'January 20, 2025',
      title: 'MLK Day - No Classes',
      description: 'All classes cancelled in observance of Martin Luther King Jr. Day',
      type: 'Holiday',
      time: 'All Day',
      location: 'All Locations'
    },
    {
      date: 'February 1, 2025',
      title: 'Career Fair 2025',
      description: 'Annual career fair featuring local employers and job opportunities',
      type: 'Event',
      time: '10:00 AM - 3:00 PM',
      location: 'Brooklyn Adult Learning Center'
    },
    {
      date: 'February 14, 2025',
      title: 'Valentine\'s Day - No Classes',
      description: 'All classes cancelled for Valentine\'s Day',
      type: 'Holiday',
      time: 'All Day',
      location: 'All Locations'
    },
    {
      date: 'March 1, 2025',
      title: 'Student Success Celebration',
      description: 'Celebrating student achievements and graduation ceremonies',
      type: 'Event',
      time: '6:00 PM - 9:00 PM',
      location: 'Queens Adult Learning Center'
    },
    {
      date: 'March 15, 2025',
      title: 'Summer 2025 Enrollment Opens',
      description: 'Enrollment begins for Summer 2025 programs',
      type: 'Enrollment',
      time: '9:00 AM',
      location: 'All Enrollment Centers'
    }
  ]

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Enrollment':
        return 'bg-nyc-blue-100 text-nyc-blue-700 border-nyc-blue-200'
      case 'Holiday':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'Event':
        return 'bg-nyc-green-100 text-nyc-green-700 border-nyc-green-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events & Important Dates
            </h2>
            <p className="text-lg text-gray-600">
              Mark your calendar with these important dates and events
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getEventColor(event.type)}`}>
                          {event.type}
                        </span>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 p-8 rounded-2xl border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive updates about important dates, enrollment periods, and special events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nyc-blue-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-nyc-blue-600 text-white font-semibold rounded-lg hover:bg-nyc-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
