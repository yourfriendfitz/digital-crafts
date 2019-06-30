from functools import partial


# the order of the args is important as partial starts from the left-most argument
def renew_drivers_license(state, license):
  print(f"The state of {state} has renewed license # {license}")
  

# the first arg is the callable renew_drivers_license and the second arg is fixed to "TX"
# to create a Texas only version of the renew_drivers_license function
renew_tx_license = partial(renew_drivers_license, "TX")

renew_drivers_license("CA", "HELLOWRLD")

# this function now only requires one argument: the license #
renew_tx_license("fgg867")
