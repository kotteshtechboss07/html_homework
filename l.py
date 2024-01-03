user_input=input("enter your email: ").lower()
num_count = 0
for i in user_input [-11::-1]:
  if i.isnumeric():
   num_count+=1
if "@gmail.com" == (user_input[-10::]) and num_count>=3   :
    print("Valid email")
else:
    print("Invalid email")

