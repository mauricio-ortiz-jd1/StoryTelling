var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibWF1b3J0aXoiLCJhIjoiY20zcHdpcmJ6MGlpbjJwb3A3c2szdGlwYyJ9.f8BE907c0zB1xN8QXzopgw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Glaciers of Glacier National Parke',
    subtitle: 'Change in coverage from 1998 to 2015',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'glacier-np',
            alignment: 'full',
            title: 'Glacier National Park Glaciers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age...',
            location: {
                center: [-73.68656, 10.83888],
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            alignment: 'left',
            title: 'Harrison Glacier, 1998',
            image: '',
            description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park...',
            location: {
                center: [-73.68656, 10.83888],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        }
    ]
}
