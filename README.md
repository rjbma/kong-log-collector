# Kong with http-log 
This is a convenience repo for quickly testing configurations of the Kong API gateway, along with the **http-log** plugin, which sends JSON logs to a local service, named **log-collector**.

## How to use

### Configure Kong
Edit the **kong.yml** file as desired.

### Run the containers

    docker-compose up

This will spin up the Kong gateway using the **http-log** plugin, along with a simple **log-collector** service to which Kong will send its logs in JSON format. This service simply logs those logs to the console

### Execute a request

    curl -X 'GET' 'http://localhost:8000/headers' --http1.1 -H 'authorization: 111222333444555' -H 'apikey: 999888777'


## See also
- https://docs.konghq.com/hub/kong-inc/http-log/using-custom-fields/
- https://github.com/tuannguyenssu/kong-examples