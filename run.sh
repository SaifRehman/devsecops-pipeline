#!/bin/bash
sleep 600
echo 'hello'
if [ ! -d "devsecops-pipeline" ]; then
 su - root -c 'git clone https://github.com/SaifRehman/devsecops-pipeline.git'
fi
su - root -c "cd devsecops-pipeline && git pull && export KUBECONFIG=/bin/kube-config-mel01-mycluster.yml && kubectl delete deployments angular && kubectl apply -f service-deployment.yml"