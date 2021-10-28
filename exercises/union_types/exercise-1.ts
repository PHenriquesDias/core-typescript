// empty export to ensure the compiler treats this file as a module
export {}

function generateSubscriptionDetails () {
  return {
    subscriptionLevel: 'Bronze',
    emailConsent: true
  }
}

function addSubscriptionDetails (person: { name: string }, signedUp: boolean): any {
  if (signedUp) {
    let { subscriptionLevel, emailConsent } = generateSubscriptionDetails()
    return { name: person.name, isSubscribed: true, subscriptionLevel, emailConsent }
  } else {
    return { name: person.name, isSubscribed: false }
  }
}
