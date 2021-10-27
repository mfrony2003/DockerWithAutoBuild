# DevOps  Cuture

![CI CD](https://github.com/mfrony2003/DockerWithAutoBuild/blob/master/workflow.jpg)

## Folder Structure 

### DockerWithAutoBuild (Full Stack App)
  
####  -> Docker_NodeAPI  ( Back-End  )

####  -> Docker_React   ( Front-End)

###   Files for triggering git Work Flow

  #### .github\workflows\automationapi.yml  -> Trigger When Backend Commit

  ####   .github\workflows\automationapp.yml -> Trigger When Frontend Commit

## Configuration

### automationapi.yml

```bash

name: ciAPI  
 
on:
 push:     
   branches: master  
 
jobs:  
 main:   
   runs-on: ubuntu-latest 
   steps:               
     - name: checkout   
       uses: actions/checkout@v2
       with:
          fetch-depth: 0
     - name: getCommitFile
       id: getfile
       run: |
          echo "::set-output name=files::$(git diff --name-only ${{ github.event.before }} ${{ github.sha }} | cut -d/ -f1 | sort -u)"
          
     
      

     - name: Setup Docker Buildx
       if: ${{steps.getfile.outputs.files =='Docker_NodeAPI'}}       
     
       uses: docker/setup-buildx-action@v1
      

     - name: Login to DockerHub   
       if: ${{steps.getfile.outputs.files =='Docker_NodeAPI'}}       
       uses: docker/login-action@v1
       with:
         username: ${{ secrets.DOCKER_USERNAME }}
         password: ${{ secrets.DOCKER_PASSWORD }}
     

     - name: Build and push api
       if: ${{steps.getfile.outputs.files =='Docker_NodeAPI'}}       
       id: docker_build_api
       uses: docker/build-push-action@v2       
       with:
         file: /Docker_NodeAPI/Dockerfile
         push: true
         tags: mfrony2003/api_cicd:latest

     
     
```

 ### automationapi.yml

```bash
name: ciAPP
 
on:
 push:
   branches: master
 
jobs:
 main:
   runs-on: ubuntu-latest
   steps:                  
     - name: checkout
       uses: actions/checkout@v2
       with:
          fetch-depth: 0
     - name: getCommitFile
       id: getfile
       run: |
          echo "::set-output name=files::$(git diff --name-only ${{ github.event.before }} ${{ github.sha }} | cut -d/ -f1 | sort -u)"
          
     
      

     - name: Setup Docker Buildx
       if: ${{steps.getfile.outputs.files =='Docker_React'}}       
     
       uses: docker/setup-buildx-action@v1
      

     - name: Login to DockerHub
       if: ${{steps.getfile.outputs.files =='Docker_React'}}       
       uses: docker/login-action@v1
       with:
         username: ${{ secrets.DOCKER_USERNAME }}
         password: ${{ secrets.DOCKER_PASSWORD }}
     

     - name: Build and push api
       if: ${{steps.getfile.outputs.files =='Docker_React'}}       
       id: docker_build_app
       uses: docker/build-push-action@v2       
       with:
         file: /Docker_React/Dockerfile
         push: true
         tags: mfrony2003/app_cicd:latest

     
     
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.




