# GraphQL-DataLoaders-NodeJS Server

GraphQL server (DataLoaders) in Node.js using Express, Babel, MongoDB and Mongoose.

This project has been developed to practice my skills with the tech stack shown above.

## Running


```bash
npm install
npm run seed
npm start
```

## Requirements

* [Node.js](http://nodejs.org/)
* [MongoDB](https://www.mongodb.org/) 

A MongoDB instance running locally (sudo mongod) is required to run any of the user related queries and mutations.

# Test

* Open http://localhost:3000/graphql

```bash

Query example

query {
  users {
    firstName
    posts {
      title
      author {
        firstName
      }
      comments {
        comment
        author {
          firstName
        }
        likes {
          firstName
        }
        post {
          title
        }
      }
    }
  }
}

Response

{
  "data": {
    "users": [
      {
        "firstName": "Augusta",
        "posts": [
          {
            "title": "Consectetur error est aliquid beatae consectetur debitis in.",
            "author": {
              "firstName": "Augusta"
            },
            "comments": [
              {
                "comment": "Mollitia sed deleniti veniam minima. Fuga dolorem corporis rerum esse quia. Fugit quia dolorem reiciendis maiores et praesentium. Quis in laboriosam eveniet ex et aut quibusdam a. Ipsam et maiores necessitatibus. Sunt aspernatur id rem vero dolorem.\n \rCorrupti nam omnis enim qui eius neque. Amet facilis nihil maxime delectus quo libero. Consectetur totam sed sit architecto. Est tempore quo quia reiciendis vel quia est voluptas. Laborum quos aut aut labore natus. Et aperiam facere.\n \rExpedita praesentium rerum architecto. Aliquid voluptatibus dolorem aut quis rerum nihil consequatur minima. Voluptate sit iusto mollitia ut aut voluptas. Consequatur vero nemo ut neque. Pariatur earum vel voluptatem libero quia ut. Suscipit voluptatem veritatis asperiores unde et doloribus ea minus dolor.",
                "author": {
                  "firstName": "Augusta"
                },
                "likes": [
                  {
                    "firstName": "Ryder"
                  },
                  {
                    "firstName": "Lexie"
                  }
                ],
                "post": {
                  "title": "Consectetur error est aliquid beatae consectetur debitis in."
                }
              },
              {
                "comment": "Culpa eum sint. Asperiores recusandae dolores est sapiente voluptatem expedita. Dolorum cum qui ut in id deleniti. Pariatur voluptatibus qui magnam delectus earum impedit adipisci quis. Veritatis pariatur non et nostrum aut autem.\n \rQui sit nam soluta magnam facere inventore ea voluptatem officiis. Inventore nostrum molestias numquam odit. Et repellendus occaecati. Aut ipsum porro culpa vel. Aut non aspernatur non expedita aut unde autem rerum. Reiciendis rerum adipisci et.\n \rCorrupti sint atque pariatur. Sit facere expedita nisi id excepturi quia est culpa. Dolorem sequi voluptatem amet. Assumenda magni nihil quia sit quia.",
                "author": {
                  "firstName": "Augusta"
                },
                "likes": [],
                "post": {
                  "title": "Consectetur error est aliquid beatae consectetur debitis in."
                }
              },
              {
                "comment": "Beatae quidem qui molestias harum. Voluptatem et dolores et quisquam saepe. Officia odit explicabo quibusdam totam.\n \rEt culpa tenetur reprehenderit quia odit dolor quia sequi. Laborum assumenda qui et tenetur sit minus eveniet. Natus cupiditate ipsum voluptatem totam omnis quos et. Ut blanditiis repellat ratione similique animi reprehenderit.\n \rNeque voluptatem nihil quaerat qui voluptatibus odit. Et voluptatem quo ab sint iste dignissimos itaque consequatur aliquam. Hic suscipit ducimus laudantium temporibus harum dolores veniam ex quo.",
                "author": {
                  "firstName": "Ryder"
                },
                "likes": [
                  {
                    "firstName": "Augusta"
                  }
                ],
                "post": {
                  "title": "Consectetur error est aliquid beatae consectetur debitis in."
                }
              }
            ]
          },
          {
            "title": "Libero iste fugit quaerat.",
            "author": {
              "firstName": "Augusta"
            },
            "comments": [
              {
                "comment": "Nulla dignissimos animi. Porro dolorum cum vitae dolores qui itaque est enim iure. Optio ut soluta. Fugiat quos natus minus temporibus magni deserunt. Dolores dolor dolor quam eius quasi culpa. Ut ipsum nisi.\n \rLaborum quia eum. Est magnam voluptate est ducimus et aut. Ullam quaerat debitis facere sit.\n \rDoloribus dolor quo illo. Odio aut ut quaerat asperiores debitis molestiae. Ipsum at et quia occaecati veniam aut non provident.",
                "author": {
                  "firstName": "Augusta"
                },
                "likes": [
                  {
                    "firstName": "Ryder"
                  },
                  {
                    "firstName": "Lexie"
                  }
                ],
                "post": {
                  "title": "Libero iste fugit quaerat."
                }
              },
              {
                "comment": "Sint assumenda delectus temporibus nostrum tempora. Temporibus a sit omnis corporis occaecati. Placeat iste iste eius aut at enim temporibus. Adipisci rem soluta dolore placeat repellat qui quidem mollitia provident. Commodi accusamus exercitationem cum enim.\n \rReprehenderit voluptatum eos velit rerum. Tempora maxime eos voluptas. Culpa debitis sapiente debitis earum magnam. Enim ad amet culpa incidunt. Quo quo aspernatur. Dolorem asperiores culpa voluptatem maiores officia dolores quas modi sed.\n \rUnde consequatur aut sunt. Sunt rerum voluptatem praesentium rerum perspiciatis id soluta. Et voluptates quia odit quisquam deleniti.",
                "author": {
                  "firstName": "Augusta"
                },
                "likes": [],
                "post": {
                  "title": "Libero iste fugit quaerat."
                }
              },
              {
                "comment": "Minus eum id nulla tempore enim aspernatur ut voluptatibus voluptatem. Recusandae vero inventore ducimus harum quidem assumenda consequatur. Esse vitae ab recusandae dolores officia illo praesentium qui. Laboriosam aut perspiciatis. Cum velit fuga magni totam id. Neque et officia magnam corrupti officiis omnis.\n \rIncidunt in nam ab suscipit fugit ducimus voluptatem aspernatur. Necessitatibus perspiciatis tenetur voluptas quia explicabo. Sunt voluptas earum. Quam impedit sint hic ipsa accusantium dicta voluptas nam pariatur.\n \rEnim explicabo reprehenderit et quas ut est autem aperiam. Voluptates porro dignissimos. A facilis assumenda quae dolor voluptates dolore eveniet. Quaerat natus consectetur omnis. Accusamus et omnis magni rem ullam vero ea voluptatem. Sapiente modi vel nihil vitae ipsam ratione dolor.",
                "author": {
                  "firstName": "Ryder"
                },
                "likes": [
                  {
                    "firstName": "Augusta"
                  }
                ],
                "post": {
                  "title": "Libero iste fugit quaerat."
                }
              }
            ]
          }
        ]
      },
      {
        "firstName": "Ryder",
        "posts": [
          {
            "title": "Blanditiis ex et asperiores.",
            "author": {
              "firstName": "Ryder"
            },
            "comments": [
              {
                "comment": "Placeat rerum quas ipsum corporis et. Aliquam ab non eligendi sunt officia velit nesciunt quod. Vel repellendus nam eos voluptatem omnis aut necessitatibus non earum. Et pariatur quos non quo consequatur incidunt. A velit a quibusdam nihil est quaerat quos reiciendis. Expedita quasi delectus dolor temporibus aut eligendi.\n \rVoluptate magni ullam voluptatibus. Nemo reiciendis velit ipsa dolorem non dolorem et magni possimus. Eligendi qui voluptatibus facere nulla eos quisquam vitae. At qui sint similique quos accusamus natus. Aliquid minima id et magnam et animi cupiditate illo deserunt. Tenetur incidunt sapiente in fugit eveniet beatae excepturi.\n \rExpedita sint et. Perspiciatis quia facilis. Et porro atque quae optio. Aut alias illo minima accusamus.",
                "author": {
                  "firstName": "Lexie"
                },
                "likes": [
                  {
                    "firstName": "Augusta"
                  },
                  {
                    "firstName": "Ryder"
                  }
                ],
                "post": {
                  "title": "Blanditiis ex et asperiores."
                }
              }
            ]
          }
        ]
      },
      {
        "firstName": "Lexie",
        "posts": [
          {
            "title": "Expedita odit assumenda eius beatae qui qui in.",
            "author": {
              "firstName": "Lexie"
            },
            "comments": []
          }
        ]
      }
    ]
  }
}

```

## License

The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
