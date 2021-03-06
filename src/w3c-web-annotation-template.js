exports = module.exports

let example = {
  '@context': 'http://www.w3.org/ns/anno.jsonld',
  'id': 'http://example.org/anno38',
  'type': 'Annotation',
  'motivation': 'commenting',
  'creator': {
    'id': 'http://example.org/user1',
    'type': 'Person',
    'name': 'A. Person',
    'nickname': 'user1'
  },
  'created': '2015-10-13T13:00:00Z',
  'generator': {
    'id': 'http://example.org/client1',
    'type': 'Software',
    'name': 'Code v2.1',
    'homepage': 'http://example.org/homepage1'
  },
  'generated': '2015-10-14T15:13:28Z',
  'stylesheet': {
    'id': 'http://example.org/stylesheet1',
    'type': 'CssStylesheet'
  },
  'body': [
    {
      'type': 'TextualBody',
      'purpose': 'tagging',
      'value': 'love'
    },
    {
      'type': 'Choice',
      'items': [
        {
          'type': 'TextualBody',
          'purpose': 'describing',
          'value': 'This needs to be 150 characters long in order to be properly simmulated. I really love this particular bit of text in this XML. No really.1234567',
          'format': 'text/plain',
          'language': 'en',
          'creator': 'http://example.org/user1'
        },
        {
          'type': 'SpecificResource',
          'purpose': 'describing',
          'source': {
            'id': 'http://example.org/comment1',
            'type': 'Audio',
            'format': 'audio/mpeg',
            'language': 'de',
            'creator': {
              'id': 'http://example.org/user2',
              'type': 'Person'
            }
          }
        }
      ]
    }
  ],
  'target': {
    'type': 'SpecificResource',
    'styleClass': 'mystyle',
    'source': 'http://example.com/document1',
    'state': [
      {
        'type': 'HttpRequestState',
        'value': 'Accept: application/xml',
        'refinedBy': {
          'type': 'TimeState',
          'sourceDate': '2015-09-25T12:00:00Z'
        }
      }
    ],
    'selector': {
      'type': 'FragmentSelector',
      'value': 'xpointer(/doc/body/section[2]/para[1])',
      'refinedBy': {
        'type': 'TextPositionSelector',
        'start': 6,
        'end': 27
      }
    }
  }
}

exports.getExample = function () {
  return example
}
