#!/bin/bash

function prepare() {
  ip addr show eth0
  export HOST_IP_ADDRESS="$(ip addr show eth0 | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)"
  echo "Host IP is $HOST_IP_ADDRESS"

  sudo docker cp $(docker create docker.io/openshift/origin:$OPENSHIFT_VERSION):/bin/oc /usr/local/bin/oc
  oc cluster up --version=$OPENSHIFT_VERSION --public-hostname=$HOST_IP_ADDRESS
  oc login -u system:admin
  export REGISTRY_URL=$(oc get svc -n default docker-registry -o jsonpath='{.spec.clusterIP}:{.spec.ports[0].port}')
  oc login -u developer -p developer
}

prepare