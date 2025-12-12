'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { MapPin } from 'lucide-react'

export function LiteracyZonesHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Empowering Adults Through Literacy Zones"
            subtitle="Unlock Your Potential"
            description="The Literacy Zone is a reform initiative to close the achievement gap in urban and rural communities of concentrated poverty and high concentrations of families and individuals with limited literacy or English language proficiency. Literacy Zones provide a systemic approach to meeting the literacy needs of these communities characterized by significant poverty and deficits in literacy and English language proficiency."
            icon={<MapPin className="w-8 h-8" />}
          />
          
          <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                VISIT ONE OF OUR FOUR FAMILY WELCOME CENTERS TODAY!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Visit One of Our Four Family Welcome Centers in Manhattan Today and Take the First Step Toward Lifelong Learning!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Bronx Zone</h4>
                  <p className="text-sm text-gray-600">Adult Literacy Zones in Bronx: Free Literacy Programs to Transform Your Future</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Brooklyn Zone</h4>
                  <p className="text-sm text-gray-600">Adult Literacy Zones in Brooklyn: Free Literacy Programs to Transform Your Future</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Manhattan Zone</h4>
                  <p className="text-sm text-gray-600">Adult Literacy Zones in Manhattan: Free Literacy Programs to Transform Your Future</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Queens Zone</h4>
                  <p className="text-sm text-gray-600">Adult Literacy Zones in Queens: Free Literacy Programs to Transform Your Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
