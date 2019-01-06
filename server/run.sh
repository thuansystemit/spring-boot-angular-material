#!/bin/bash

VERSION=0.0.1-SNAPSHOT
MODULE=ReactiveExample

function setup_() {
    source /etc/environment
}

function build_() {
    gradle build
}

function run_() {
    java -jar build/libs/${MODULE}-${VERSION}.jar
}

setup_
build_
run_