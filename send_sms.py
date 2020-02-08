# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'AC393888f8709715049cfd01f32c6d9393'
auth_token = '98c5e3a736e6ac1b4b1b7145865cb5bf'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Halo",
                     from_='+17027664886',
                     to='+19196481600'
                 )

print(message.sid)
