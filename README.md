# FINANCE PROJECT
NextJS project with Hono, Tailwind, Clerk, Drizzle

# Install BunJS
```https://bun.sh/```

## Setup
1. Clone repo
2. Create ```.env``` from ```.env.template``` and fill the variables
3. Install dependencies ```bun i```
4. Generate migrate file to update the db ```bun run db:generate``` 
5. Push migrate changes file to Neon db ```bun run db:migrate``` 
6. Clean cookies
7. Start ```bun run dev```

## Changes models prisma
```
npx prisma generate
```
```
npx prisma db push
```

## Clean database
```
npx prisma migrate reset
```

## Open prisma studio
```
npx prisma studio
```


## Fake transactions csv
```
Type, Product, Started Date, Completed Date, Description, Amount, Fee, Currency, State, Balance
CARD_PAYMENT, Credit Card, 2024-01-05 10:15:00, 2024-01-06 12:30:00, Grocery Store, -50.75, 0.50, EUR, Completed, 945.25
TOPUP, Bank Account, 2024-01-07 09:00:00, 2024-01-07 09:05:00, Salary, 2000.00, 0.00, EUR, Completed, 2945.25
CARD_PAYMENT, Debit Card, 2024-01-08 19:45:00, 2024-01-08 20:00:00, Restaurant, -75.20, 0.75, EUR, Completed, 2869.30
CARD_PAYMENT, Credit Card, 2024-01-10 14:00:00, 2024-01-10 14:30:00, Electronics Store, -300.00, 1.50, EUR, Completed, 2567.80
TOPUP, Bank Account, 2024-01-12 11:15:00, 2024-01-12 11:20:00, Refund, 50.00, 0.00, EUR, Completed, 2617.80
CARD_PAYMENT, Debit Card, 2024-01-14 16:10:00, 2024-01-14 16:25:00, Online Shopping, -120.99, 0.50, EUR, Completed, 2496.31
CARD_PAYMENT, Credit Card, 2024-01-15 08:30:00, 2024-01-15 08:35:00, Coffee Shop, -15.50, 0.10, EUR, Completed, 2480.71
TOPUP, Bank Account, 2024-01-18 17:45:00, 2024-01-18 17:50:00, Gift, 100.00, 0.00, EUR, Completed, 2580.71
CARD_PAYMENT, Debit Card, 2024-01-20 06:55:00, 2024-01-20 07:00:00, Gym Membership, -45.00, 0.50, EUR, Completed, 2535.21
CARD_PAYMENT, Credit Card, 2024-01-22 13:20:00, 2024-01-22 13:30:00, Fuel Station, -60.00, 0.50, EUR, Completed, 2474.71
TOPUP, Bank Account, 2024-01-24 15:40:00, 2024-01-24 15:45:00, Freelance Payment, 500.00, 0.00, EUR, Completed, 2974.71
CARD_PAYMENT, Debit Card, 2024-01-26 18:10:00, 2024-01-26 18:20:00, Supermarket, -80.25, 0.75, EUR, Completed, 2893.71
CARD_PAYMENT, Credit Card, 2024-01-28 21:00:00, 2024-01-28 21:05:00, Cinema, -25.00, 0.25, EUR, Completed, 2868.46
TOPUP, Bank Account, 2024-02-01 08:20:00, 2024-02-01 08:25:00, Lottery Winnings, 250.00, 0.00, EUR, Completed, 3118.46
CARD_PAYMENT, Debit Card, 2024-02-03 12:35:00, 2024-02-03 12:40:00, Pharmacy, -30.50, 0.10, EUR, Completed, 3087.86
CARD_PAYMENT, Credit Card, 2024-02-05 10:50:00, 2024-02-05 11:00:00, Bookstore, -22.75, 0.15, EUR, Completed, 3064.96
TOPUP, Bank Account, 2024-02-07 09:10:00, 2024-02-07 09:15:00, Investment, 300.00, 0.00, EUR, Completed, 3364.96
CARD_PAYMENT, Debit Card, 2024-02-10 16:00:00, 2024-02-10 16:10:00, Clothing Store, -95.50, 0.50, EUR, Completed, 3268.96
CARD_PAYMENT, Credit Card, 2024-02-12 13:45:00, 2024-02-12 14:00:00, Hotel, -150.00, 1.00, EUR, Completed, 3117.96
TOPUP, Bank Account, 2024-02-14 11:30:00, 2024-02-14 11:35:00, Bonus, 400.00, 0.00, EUR, Completed, 3517.96
CARD_PAYMENT, Debit Card, 2024-02-16 08:00:00, 2024-02-16 08:10:00, Taxi, -20.00, 0.20, EUR, Completed, 3497.76

```