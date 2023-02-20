import { Injectable } from '@angular/core';
import { FleetModel } from './our-fleet.model';
@Injectable({
    providedIn: 'root'
})
export class FleetService {
    fleets: FleetModel[] = ([
        new FleetModel(
            'Eco Explorer', 
            './assets/_live/img/fleet-eco-explorer.png', 
            'eco-explorer', 
            'The M/V Eco Explorer is a full service dive cruiser with 20 comfortable and fully air-conditioned cabins. Enjoy its shaded open deck in the stern section or relax in the jacuzzi located on the bow area.', 
            {
                'Gross Tonnage': 596.62,
                'LOA': 45.98,
                'Breadth': 8.50,
                'Draft': 3.75,
                'KW': 956.15,
                'Main Engine': 'Daihatsu',
                'Year Built': 1982,
                'Cruising Speed': '8-10 knots',
                'Hull': 'Steel',
                'Generators': '2x250 KVA Yanmar',
                'Water Maker': 'Yes',
                'Water Capacity': '2x55 tons/day',
                'Electricity': '110/220v',
                'Minimum Capacity': '24 guests',
                'Maximum Capacity': '40 guests'
            },
            `<ul>
                <li>Fully air-conditioned and carpeted interiors</li>
                <li>20&nbsp; twin-sharing cabins w/ ensuite toilet and shower facilities</li>
                <li>Hot and cold shower</li>
                <li>8 open rinse showers on deck</li>
                <li>Entertainment center with TV, DVD and stereo</li>
                <li>Lounge</li>
                <li>Library of books, magazines</li>
                <li>15sqm large sundeck</li>
                <li>Jacuzzi</li>
            </ul>`,
            '3 Suite Cabin, 6 Deluxe, 7 Standard, 2 C-Deck',
            `<ul>
                <li>First Aid DAN Kit</li>
                <li>Solas Compliant</li>
                <li>GMDSS, EPIRB</li>
                <li>SSB Radio</li>
                <li>Marine VHF</li>
                <li>Weather Fax and Radar</li>
                <li>2 x 25, 1 x 10 inflatable life raft</li>
            </ul>`,
            `<ul>
                <li>Compressors: 15 cfm each</li>
                <li>Aluminum tanks</li>
                <li>Regulators</li>
                <li>BCDs</li>
                <li>Weight belts</li>
                <li>Weights and dive lights</li>
                <li>Nitrox Membrane System</li>
                <li>2 x 27 chase boats</li>
                <li>2 x 18 inflatable rescue boats</li>
            </ul>`,
            ['./assets/_live/img/fleet/eco-explorer/img1.png',
            './assets/_live/img/fleet/eco-explorer/img2.png',
            './assets/_live/img/fleet/eco-explorer/img3.png',
            './assets/_live/img/fleet/eco-explorer/img4.png']
        ),
        new FleetModel(
            'Oceanic Explorer', 
            './assets/_live/img/fleet-oceanic-explorer.jpg', 
            'oceanic-explorer', 
            'The M/V Oceanic Explorer, the fastest boat in our fleet, is a full service dive cruiser with comfortable cabins, spacious and fully air conditioned.', 
            {
                'Gross Tonnage': 191.16,
                'LOA': 33.31,
                'Breadth': 6.2,
                'Draft': 2.99,
                'KW': 'N/A',
                'Main Engine': 'Yanmar',
                'Year Built': 1979,
                'Cruising Speed': '8-10 knots',
                'Hull': 'Steel',
                'Generators': '2x Yanmar 125 KVA - 1x Kubota 10 KVA',
                'Water Maker': 'No',
                'Water Capacity': '30 tons',
                'Electricity': '220/110v-60htz',
                'Minimum Capacity': '15 guests',
                'Maximum Capacity': '28 guests'
            },
            `<ul>
                <li>Fully air-conditioned and carpeted interiors</li>
                <li>3 DeLuxe Rooms, 2&nbsp; Standard Rooms,&nbsp; 1 Premium Economy Room, 4 Economy Rooms&nbsp;with ensuite toilet and shower facilities</li>
                <li>Jacuzzi</li>
                <li>4 open-rinse showers on deck</li>
                <li>Entertainment center w/ TV and stereo</li>
                <li>Hot and cold shower</li>
                <li>Library of books, magazines and DVDs</li>
                <li>Saloon area</li>
                <li>Lounge area</li>
            </ul>
            <p>** Note : All Economy Rooms in Oceanic 3 Explorer are with low ceiling at 6ft or 182cm height.</p>`,
            `<p>3 DeLuxe Rooms (twin sharing)</p>
            <p>2 Standard Rooms (twin sharing)</p>
            <p>1 Premium Economy Room (triple sharing)</p>
            <p>4 Economy Rooms (twin sharing)</p>
            <p>** Note : All Economy Rooms in Oceanic 3 Explorer are with low ceiling at 6ft or 182cm height.</p>`,
            `<ul>
                <li>First Aid DAN Kit</li>
                <li>Solas Compliant</li>
                <li>GMDSS, EPIRB</li>
                <li>SSB Radio</li>
                <li>SART Marine VHF</li>
                <li>Weather Fax</li>
                <li>Radar</li>
                <li>Standard VHF portable radio and Icon base radio</li>
                <li>Eco Sounder</li>
                <li>Portable GPS</li>
                <li>Immarsat Worldwide Telephone Communication System</li>
                <li>2 x 20 inflatable life raft</li>
            </ul>`,
            `<ul>
                <li>3 Bauer K15 compressors</li>
                <li>Aluminum tanks</li>
                <li>Regulators</li>
                <li>BCDs</li>
                <li>Weight belts</li>
                <li>Weights and dive lights</li>
                <li>Nitrox Membrane System</li>
                <li>2 x 27 footer chase boats</li>
            </ul>`,
            [
                './assets/_live/img/fleet/oceanic-explorer/img1.png',
                './assets/_live/img/fleet/oceanic-explorer/img2.png',
                './assets/_live/img/fleet/oceanic-explorer/img3.png',
                './assets/_live/img/fleet/oceanic-explorer/img4.png',
                './assets/_live/img/fleet/oceanic-explorer/img5.png',
                './assets/_live/img/fleet/oceanic-explorer/img6.png'
            ]
        ),
        new FleetModel(
            'Stella Maris Explorer', 
            './assets/_live/img/fleet-stella-maris-explorer.png', 
            'stella-maris-explorer', 
            'The M/Y Stella Maris Explorer is a spacious 36 meter twin screw, full service dive cruiser. This boat is one of the fleet’s pleasure yachts, as it has a spacious open-air top deck – perfect for enjoying your sundowner while watching the sunset!', 
            {
                'Gross Tonnage': 275.93,
                'LOA': 31.08,
                'Breadth': 7.4,
                'Draft': 3.4,
                'KW': 'N/A',
                'Main Engine': 'MTU',
                'Year Built': 1986,
                'Cruising Speed': '8-10 knots',
                'Hull': 'Aluminum',
                'Generators': '2x Isuzu 60 KVA',
                'Water Maker': '5 tons/day',
                'Water Capacity': '18 tons',
                'Electricity': '220/110v-60htz',
                'Minimum Capacity': '12 guests (Sure Sail)',
                'Maximum Capacity': '20 guests'
            },
            `<ul>
                <li>Fully air-conditioned and carpeted interiors</li>
                <li>10 twin-sharing cabins w/ ensuite toilet and bath</li>
                <li>Hot and cold shower</li>
                <li>4 open rinse showers on deck</li>
                <li>Entertainment center with TV, DVD and stereo</li>
                <li>Lounge</li>
                <li>Library of books, magazines and DVDs</li>
                <li>20sqm sundeck bar area</li>
                <li>Jacuzzi</li>
            </ul>`,
            `3 Deluxe, 4 Standard, 3 C-Deck`,
            `<ul>
                <li>First Aid DAN Kit</li>
                <li>Solas Compliant</li>
                <li>GMDSS,EPIRB</li>
                <li>SSB Radio</li>
                <li>SART Marine VHF</li>
                <li>Weather Fax</li>
                <li>Radar</li>
                <li>Standard VHF portable radio and Icon base radio</li>
                <li>Eco Sounder</li>
                <li>Portable GPS</li>
                <li>Immarsat Worldwide Telephone Communication System</li>
                <li>2 x 20 inflatable life raft</li>
            </ul>`,
            `<ul>
                <li>3 Bauer K15 compressors</li>
                <li>Aluminum tanks</li>
                <li>Regulators</li>
                <li>BCDs</li>
                <li>Weight belts</li>
                <li>Weights and dive lights</li>
                <li>Nitrox Membrane System</li>
                <li>2 x 27 footer chase boats</li>
            </ul>`,
            [
                './assets/_live/img/fleet/stella-maris-explorer/img1.png',
                './assets/_live/img/fleet/stella-maris-explorer/img2.png',
                './assets/_live/img/fleet/stella-maris-explorer/img3.png',
                './assets/_live/img/fleet/stella-maris-explorer/img4.png',
                './assets/_live/img/fleet/stella-maris-explorer/img5.png'
            ]
        ),
        new FleetModel(
            'Crystal Explorer', 
            './assets/_live/img/fleet-crystal-explorer.jpg', 
            'crystal-explorer', 
            'The M/V Crystal Explorer is a single-screw, motor pleasure/passenger boat ferry of all-steel, welded construction designed as a restaurant cruise ship.The vessel can accommodate 300 passengers and it has an aqua lounge (underwater sea observatory) for guests wanting to view marine life without getting into a scuba/wetsuit.',
            undefined, undefined, undefined, undefined, undefined,
            [
                './assets/_live/img/fleet/crystal-explorer/img1.png',
                './assets/_live/img/fleet/crystal-explorer/img2.png',
                './assets/_live/img/fleet/crystal-explorer/img3.png',
                './assets/_live/img/fleet/crystal-explorer/img4.png'
            ]
        ),
    ]);

    constructor() {}

    get() {
        return this.fleets;
    }
    findByUrl(url:string) {
        for(let fleet of this.fleets) {
            if(fleet.url == url) return fleet;
        }
        return {};
    }
}