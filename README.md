#  DevSecOps
<h1 align="center">
  <br>
  <a href="https://github.com/SaifRehman/devsecops-pipeline"><img src="https://www.veracode.com/sites/default/files/styles/blog_post_resize_960/public/shutterstock_584916460.jpg?itok=XA42eAnc" alt="Lotion" width="IBM"></a>
  <br>
      Sample Web Application with DevSecOps Pipeline 
  <br>
  <br>
</h1>

<h4 align="center">Powered by IBM Kubernetes Service, IBM Application Security, and Jenkins</h4>

<p align="center">
  <a>
    <img src="https://img.shields.io/travis/keppel/lotion/master.svg"
         alt="Travis Build">
  </a>
</p>
<br>

## Learning Objectives?
1. Understand basic Kubernetes and Docker concepts
2. Using IBM Kubernetes Service
3. Deploying application to Kubernetes
4. Building and creating Dockerfile
5. Container and Application Security
5. Implementing a DevSecOps Continous Delivery pipeline using Jenkins, IBM Application Security, GitHub, and Aqua Micro-Scanner

## Prerequisites
1. Signup to [IBM Cloud](https://nodejs.org/en/download/)
2. Signup to [IBM Application Security Free Trial](https://www.ibm.com/ae-en/marketplace/application-security-on-cloud)
3. Signup to [Github](https://github.com/)
4. Signup to [Docker Hub](https://hub.docker.com/)
5. Install [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
6. Install [Docker](https://docs.docker.com/install/)
7. Install [IBM Cloud CLI](https://console.bluemix.net/docs/cli/reference/ibmcloud/download_cli.html#install_use)
8. Install [GitCli](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
## What are we building?
Sample Angular Application where building, security testing, and deployment of the application is automated.  

## Application Architecture
![1](images/2.png)

#### Featured technologies
1. [Angular4](https://angular.io/):- Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges
2. [Nodejs](https://nodejs.org/en/):- An open-source JavaScript run-time environment for executing server-side JavaScript code.
3. [Typescript](https://www.typescriptlang.org/):- TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language
4. [Docker](https://www.docker.com/):- Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.
5. [Kubernetes](https://kubernetes.io/):- Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications
6. [Jenkins](https://jenkins.io/):- Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery.
7. [IBM Application Security ](https://www.ibm.com/ae-en/marketplace/application-security-on-cloud):- IBM Application Security on Cloud is a cloud app security offering that helps secure your organization's Web, cloud, mobile, and other applications. It detects dozens of today's most pervasive security vulnerabilities and enhances your application security.
8. [Aqua Micro Scanner](https://github.com/aquasecurity/microscanner):- Aqua Security's MicroScanner lets you check your container images for vulnerabilities. If your image has any known high-severity issue, MicroScanner can fail the image build, making it easy to include as a step in your CI/CD pipeline.
9. [Docker Cloud](https://cloud.docker.com/):- Docker Cloud is the name of the new cloud service by Docker that expands on the features of Tutum, brings a tighter integration with Docker Hub, and provides new updates and fixes
10. [Github](https://github.com/):- GitHub Inc. is a web-based hosting service for version control using Git. It is mostly used for computer code

### Setting a Cluster in IBM Kubernetes Service
1. Go to [IBM Cloud console](https://console.bluemix.net/dashboard/apps/)
2. Navigate to containers
![1](images/3.png)

3. Click on create new cluster
![10](images/4.png)

4. Name your cluster and create a cluster, wiat for few minutes to get it fully deployed. After it is fully deployed click on the cluster
![11](images/5.png)
 
* This shows overview of your deployed cluster 
5. Click on Access tab and follow the instruction on the website
6. Install the container service plugin.
```
$ ibmcloud plugin install container-service -r Bluemix
```
7. Log in to your IBM Cloud account.
```
$ ibmcloud login -a https://api.eu-de.bluemix.net
$ ibmcloud cs region-set eu-central
```
7. Set the context for the cluster in in your CLI.
* Get the command to set the environment variable and download the Kubernetes configuration files.
```
$ ibmcloud cs cluster-config NameOfYourCluster
```
* Set the KUBECONFIG environment variable. Copy the output from the previous command and paste it in your terminal. The command output should look similar to the following.
8.  Verify that you can connect to your cluster by listing your worker nodes
```
$  kubectl get nodes
```
![6](images/6.png)

> You will be able to access your cluster now hosted in IBM Kubernetes Service

### Fork the repo
1. Fork the [DevSecOps Repo](https://github.com/SaifRehman/devsecops-pipeline)
2. Clone your forked repo locally

### Deploy Jenkins to Kubernetes Cluster
1. Navigate to ```jenkins``` folder 
2. Deploy ```Kubernetes Deployment``` and ```Kubernetes services```
```
$ kubectl create -f jenkins.yml
```
3. Check if its deployed and running 
```
$ kubectl get pods
```
![7](images/7.png)
