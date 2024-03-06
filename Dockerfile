FROM ubuntu:20.04

#ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y vim python3 python3-pip
RUN pip3 install flask

WORKDIR /workdir

COPY . /workdir

CMD ["/bin/bash"]
