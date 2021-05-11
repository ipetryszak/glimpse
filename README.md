![image](https://user-images.githubusercontent.com/25117978/117818428-e1d35b00-b268-11eb-9e87-c206a7fa4421.png)

[![codecov](https://codecov.io/gh/skorpiom/glimpse/branch/master/graph/badge.svg?token=40I4HDEZ5U)](https://codecov.io/gh/skorpiom/glimpse)

## About the project

[Glimpse](https://skorpiom.github.io/glimpse/) is a platform providing access to Youtube and Vimeo video collections. Application uses YouTube APIKey and Vimeo unauthenticated token. 

## Project structure

- ./src/api - contains services providing api data
- ./src/app - contains utils, consts, store
- ./src/components 
- ./src/models - contains interfaces
- ./src/pages
- ./src/skeletons - contains placeholders

## Tech Stack

- React
- TypeScript
- Redux
- Redux toolkit
- React Testing Library
- HTML, CSS


### Dependencies

| **Dependency**              | **Use**                                              |
| --------------------------- | ---------------------------------------------------- |
| axios                       | Promise based HTTP client for the browser and node.js|
| lodash                      | Library providing JS Utilities                       |
| node-sass                   | Library that allows to natively compile .scss        |
| react                       | React library                                        |
| react-dom                   | React library for DOM rendering                      |
| react-redux                 | Connects React components to Redux                   |
| react-router-dom            | React library for routing                            |
| redux                       | Library for unidirectional data flows                |
| redux-thunk                 | Async redux library                                  |
| react-intersection-observer | Implementation of the Intersection Observer API      |

## Application functionalities

[Glimpse](https://skorpiom.github.io/glimpse/) allows to input YT API Key and Vimeo Vimeo unauthenticated token. 

![image](https://user-images.githubusercontent.com/25117978/117822433-da15b580-b26c-11eb-8439-dafab4335a36.png)

After typing in one or both keys you get access to all funcionalities.

![image](https://user-images.githubusercontent.com/25117978/117822830-27922280-b26d-11eb-9ea8-cf0a803bcfd1.png)

You can easily change video service.

![image](https://user-images.githubusercontent.com/25117978/117823047-590aee00-b26d-11eb-9fbc-931f1c6f7883.png)

And search for videos.

![image](https://user-images.githubusercontent.com/25117978/117823251-8d7eaa00-b26d-11eb-8160-e323d30e6b8b.png)

App implements infinite loading and holds place for coming data.

![image](https://user-images.githubusercontent.com/25117978/117823490-d0408200-b26d-11eb-9d3e-d47a977edaff.png)

Watch view allows to change videos without coming back to search page.

![image](https://user-images.githubusercontent.com/25117978/117823727-139af080-b26e-11eb-9aac-5f05695e0821.png)

Mobile views:

![glimpe_mobile](https://user-images.githubusercontent.com/25117978/117824264-a176db80-b26e-11eb-88fc-b0220acd2858.png)

IPad views:

![image](https://user-images.githubusercontent.com/25117978/117824429-c79c7b80-b26e-11eb-948d-f9d2697f62d6.png)
![image](https://user-images.githubusercontent.com/25117978/117824510-d6832e00-b26e-11eb-8a78-68c52fd14ead.png)
![image](https://user-images.githubusercontent.com/25117978/117824610-ebf85800-b26e-11eb-8a11-9f4ca06580ad.png)

