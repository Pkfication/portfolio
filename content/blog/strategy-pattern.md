---
title: Exploring Strategy Pattern
date: 2025-10-05
excerpt: How strategy pattern can help you integrate new features into your systems.
tags: [Design Patterns, Strategy Pattern]
---

I have been trying to include design patterns into my arsenal lately. I have seen it being used at multiple places, but I was never able to implement it to solve any problem on my own and I am trying to change that fact now. Today's Design pattern is `Strategy Pattern`

## Strategy Pattern

**Strategy** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

## Uses

Where can I use this in my real production applications:

- Authentication
- Payment
- Anything that can be done in multiple ways

Sky is the limit here. Do let me know if you have some special ideas.

## Example

Instead of trying to do something special, I would implement something a payment systems using different third parties.

According to the pattern, I would be needing a context and a strategy. A context is where I would be storing the strategy to solve the problem. Strategy is just a way to solve the problem.

This is the strategy interface, that declares the common function.

```go
package main

import "fmt"

// Strategy defines the interface that all payment methods must implement
type PaymentStrategy interface {
	Pay(amount float64)
}
```

Here are the concrete strategies, encapsulating interchangeable behaviours

```go
// PayPal strategy
type PayPal struct{}

func (p *PayPal) Pay(amount float64) {
	fmt.Printf("Paid ₹%.2f using PayPal\n", amount)
}

// Stripe strategy
type Stripe struct{}

func (s *Stripe) Pay(amount float64) {
	fmt.Printf("Paid ₹%.2f using Stripe\n", amount)
}

// Razorpay strategy
type Razorpay struct{}

func (r *Razorpay) Pay(amount float64) {
	fmt.Printf("Paid ₹%.2f using Razorpay\n", amount)
}
```

Now we need a context struct to hold a strategy which can be changed dynamically on the go.

```go
type PaymentContext struct {
	accountID string
}

func NewPaymentContext(accountID string) *PaymentContext {
	return &PaymentContext{accountID: accountID}
}

// Step 4: Context method that accepts a strategy dynamically
func (c *PaymentContext) Pay(amount float64, strategy PaymentStrategy) {
	fmt.Printf("Processing payment for account %s...\n", c.accountID)
	strategy.Pay(amount)
}
```

Now all we have to do is to use it in following way:

```go
func main() {
	ctx := NewPaymentContext("ACC123")

	ctx.Pay(1200, &PayPal{})
	ctx.Pay(850, &Stripe{})
	ctx.Pay(499, &Razorpay{})
}

Processing payment for account ACC123...
Paid ₹1200.00 using PayPal
Processing payment for account ACC123...
Paid ₹850.00 using Stripe
Processing payment for account ACC123...
Paid ₹499.00 using Razorpay
```

If we don't like the types as much we can do something like this:

```go
type PaymentStrategy func(amount float64)

type PaymentContext struct {
	accountID string
}

func (c *PaymentContext) Pay(amount float64, strategy PaymentStrategy) {
	fmt.Printf("Processing payment for %s...\n", c.accountID)
	strategy(amount)
}

func main() {
	ctx := &PaymentContext{"ACC123"}

	paypal := func(a float64) { fmt.Printf("Paid ₹%.2f using PayPal\n", a) }
	stripe := func(a float64) { fmt.Printf("Paid ₹%.2f using Stripe\n", a) }

	ctx.Pay(1000, paypal)
	ctx.Pay(500, stripe)
}

```

---

## Without Strategy Pattern

It might not make sense here so let me give you an example, how things would look like if we were not using the design patterns:

```go
package main

import "fmt"

func ProcessPayment(method string, amount float64) {
	if method == "paypal" {
		fmt.Printf("Paid ₹%.2f using PayPal\n", amount)
	} else if method == "stripe" {
		fmt.Printf("Paid ₹%.2f using Stripe\n", amount)
	} else if method == "razorpay" {
		fmt.Printf("Paid ₹%.2f using Razorpay\n", amount)
	} else {
		fmt.Println("Unknown payment method:", method)
	}
}

func main() {
	ProcessPayment("paypal", 1000)
	ProcessPayment("stripe", 2000)
	ProcessPayment("razorpay", 500)
}
```

Now imagine having to make changes to ProcessPayment. A simple mistake there could mean we stop processing payments altogether. On top of that, writing test cases would be a nightmare — especially if we have to modify upstream code just to include something written elsewhere. If the code base crosses 50K lines, it starts to hamper the develop experience.

Be nice and think about others.
