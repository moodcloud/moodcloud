import os
a = os.system("curl -X 'POST' -H 'Authorization: Basic MmEzM2ZkNzA5ZTVlNDNhYjhlZjQzY2U1ZGQ5MDZiOGQ6MTVmZWYxYTk5MTViNDBjODgwOWRlOTE2NzRjMmI2ZTQ=' -d grant_type=client_credentials https://accounts.spotify.com/api/token")
print(a)