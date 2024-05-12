## API DOCUMENTATION - BE ASSIGNMENT
# Tools used
- Fastify
- Supabase (for authentication)
- Prisma (ORM)
- PostgreSQL
- Docker

# Table Definition
PaymentAccount:
- id
- type
- email
- created_at
- updated_at

PaymentHistory
- id
- status
- transaction_id
- payment_date

Transaction
- id
- amount
- status
- to_address
- type
- payment_account_id

# API USAGE
# /api/register (POST)
```json
// request body
{
    "name": "test",
    "email": "test@gmail.com",
    "password": "12345678"
}

// output
{
    "message": "User registered successfully",
    "userAuth": {
        "user": {
            "id": "f58d8da0-44ab-43ef-8e64-368475adf6f4",
            "aud": "authenticated",
            "role": "authenticated",
            "email": "test@gmail.com",
            "email_confirmed_at": "2024-05-12T08:58:45.769742614Z",
            "phone": "",
            "last_sign_in_at": "2024-05-12T08:58:45.773060827Z",
            "app_metadata": {
                "provider": "email",
                "providers": [
                    "email"
                ]
            },
            "user_metadata": {
                "email": "test@gmail.com",
                "email_verified": false,
                "phone_verified": false,
                "sub": "f58d8da0-44ab-43ef-8e64-368475adf6f4"
            },
            "identities": [
                {
                    "identity_id": "385133fd-5ebf-4fd5-943e-147addec6828",
                    "id": "f58d8da0-44ab-43ef-8e64-368475adf6f4",
                    "user_id": "f58d8da0-44ab-43ef-8e64-368475adf6f4",
                    "identity_data": {
                        "email": "test@gmail.com",
                        "email_verified": false,
                        "phone_verified": false,
                        "sub": "f58d8da0-44ab-43ef-8e64-368475adf6f4"
                    },
                    "provider": "email",
                    "last_sign_in_at": "2024-05-12T08:58:45.766518193Z",
                    "created_at": "2024-05-12T08:58:45.76657Z",
                    "updated_at": "2024-05-12T08:58:45.76657Z",
                    "email": "test@gmail.com"
                }
            ],
            "created_at": "2024-05-12T08:58:45.762993Z",
            "updated_at": "2024-05-12T08:58:45.775588Z",
            "is_anonymous": false
        },
        "session": {
            "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IlNsdzV4WjZxVlFabVdqd1AiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE1NTA3OTI1LCJpYXQiOjE3MTU1MDQzMjUsImlzcyI6Imh0dHBzOi8vcXllYnN3dnF4ZnRtd2VnenJ3cHguc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImY1OGQ4ZGEwLTQ0YWItNDNlZi04ZTY0LTM2ODQ3NWFkZjZmNCIsImVtYWlsIjoieWF5YUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoieWF5YUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiZjU4ZDhkYTAtNDRhYi00M2VmLThlNjQtMzY4NDc1YWRmNmY0In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTU1MDQzMjV9XSwic2Vzc2lvbl9pZCI6IjRkMWJmYjhkLWYyYTctNDJlZS05NzQ2LWFhNzUxOTVkMmJjMyIsImlzX2Fub255bW91cyI6ZmFsc2V9.xgwRqT7zsoJ9GjoB6lGO4fI8X9SxTSR5v27WOcQ3U8s",
            "token_type": "bearer",
            "expires_in": 3600,
            "expires_at": 1715507925,
            "refresh_token": "auLEApsQ2GhM8HxTOZdqhw",
            "user": {
                "id": "f58d8da0-44ab-43ef-8e64-368475adf6f4",
                "aud": "authenticated",
                "role": "authenticated",
                "email": "test@gmail.com",
                "email_confirmed_at": "2024-05-12T08:58:45.769742614Z",
                "phone": "",
                "last_sign_in_at": "2024-05-12T08:58:45.773060827Z",
                "app_metadata": {
                    "provider": "email",
                    "providers": [
                        "email"
                    ]
                },
                "user_metadata": {
                    "email": "test@gmail.com",
                    "email_verified": false,
                    "phone_verified": false,
                    "sub": "f58d8da0-44ab-43ef-8e64-368475adf6f4"
                },
                "identities": [
                    {
                        "identity_id": "385133fd-5ebf-4fd5-943e-147addec6828",
                        "id": "f58d8da0-44ab-43ef-8e64-368475adf6f4",
                        "user_id": "f58d8da0-44ab-43ef-8e64-368475adf6f4",
                        "identity_data": {
                            "email": "test@gmail.com",
                            "email_verified": false,
                            "phone_verified": false,
                            "sub": "f58d8da0-44ab-43ef-8e64-368475adf6f4"
                        },
                        "provider": "email",
                        "last_sign_in_at": "2024-05-12T08:58:45.766518193Z",
                        "created_at": "2024-05-12T08:58:45.76657Z",
                        "updated_at": "2024-05-12T08:58:45.76657Z",
                        "email": "test@gmail.com"
                    }
                ],
                "created_at": "2024-05-12T08:58:45.762993Z",
                "updated_at": "2024-05-12T08:58:45.775588Z",
                "is_anonymous": false
            }
        }
    }
}
```

# /api/login (POST)
```json
// request body
{
    "email": "test@gmail.com",
    "password": "12345678"
}

// output
{
    "message": "Sign in success",
    "data": {
        "user": {
            "id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
            "aud": "authenticated",
            "role": "authenticated",
            "email": "test@gmail.com",
            "email_confirmed_at": "2024-05-12T03:21:14.336535Z",
            "phone": "",
            "confirmed_at": "2024-05-12T03:21:14.336535Z",
            "last_sign_in_at": "2024-05-12T09:00:23.170554356Z",
            "app_metadata": {
                "provider": "email",
                "providers": [
                    "email"
                ]
            },
            "user_metadata": {
                "email": "test@gmail.com",
                "email_verified": false,
                "phone_verified": false,
                "sub": "4a6f69ef-59e9-493c-b919-a0021e72f686"
            },
            "identities": [
                {
                    "identity_id": "c06e6b71-d52e-4d41-a300-589b16c5a864",
                    "id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                    "user_id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                    "identity_data": {
                        "email": "test@gmail.com",
                        "email_verified": false,
                        "phone_verified": false,
                        "sub": "4a6f69ef-59e9-493c-b919-a0021e72f686"
                    },
                    "provider": "email",
                    "last_sign_in_at": "2024-05-12T03:21:14.333657Z",
                    "created_at": "2024-05-12T03:21:14.333704Z",
                    "updated_at": "2024-05-12T03:21:14.333704Z",
                    "email": "test@gmail.com"
                }
            ],
            "created_at": "2024-05-12T03:21:14.330769Z",
            "updated_at": "2024-05-12T09:00:23.173206Z",
            "is_anonymous": false
        },
        "session": {
            "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IlNsdzV4WjZxVlFabVdqd1AiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE1NTA4MDIzLCJpYXQiOjE3MTU1MDQ0MjMsImlzcyI6Imh0dHBzOi8vcXllYnN3dnF4ZnRtd2VnenJ3cHguc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjRhNmY2OWVmLTU5ZTktNDkzYy1iOTE5LWEwMDIxZTcyZjY4NiIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiNGE2ZjY5ZWYtNTllOS00OTNjLWI5MTktYTAwMjFlNzJmNjg2In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTU1MDQ0MjN9XSwic2Vzc2lvbl9pZCI6IjU1OWY4OGRmLWNjNzEtNGI1Mi05ZGNjLWI1ZTgyNDMwMjM3MyIsImlzX2Fub255bW91cyI6ZmFsc2V9.NmraAGNDrxhS4e__o3VaoUd4HdKNIEKaQ1AsqEqdwPg",
            "token_type": "bearer",
            "expires_in": 3600,
            "expires_at": 1715508023,
            "refresh_token": "MF_CwuDgKm_PSfXZvwXZDg",
            "user": {
                "id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                "aud": "authenticated",
                "role": "authenticated",
                "email": "test@gmail.com",
                "email_confirmed_at": "2024-05-12T03:21:14.336535Z",
                "phone": "",
                "confirmed_at": "2024-05-12T03:21:14.336535Z",
                "last_sign_in_at": "2024-05-12T09:00:23.170554356Z",
                "app_metadata": {
                    "provider": "email",
                    "providers": [
                        "email"
                    ]
                },
                "user_metadata": {
                    "email": "test@gmail.com",
                    "email_verified": false,
                    "phone_verified": false,
                    "sub": "4a6f69ef-59e9-493c-b919-a0021e72f686"
                },
                "identities": [
                    {
                        "identity_id": "c06e6b71-d52e-4d41-a300-589b16c5a864",
                        "id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                        "user_id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                        "identity_data": {
                            "email": "test@gmail.com",
                            "email_verified": false,
                            "phone_verified": false,
                            "sub": "4a6f69ef-59e9-493c-b919-a0021e72f686"
                        },
                        "provider": "email",
                        "last_sign_in_at": "2024-05-12T03:21:14.333657Z",
                        "created_at": "2024-05-12T03:21:14.333704Z",
                        "updated_at": "2024-05-12T03:21:14.333704Z",
                        "email": "test@gmail.com"
                    }
                ],
                "created_at": "2024-05-12T03:21:14.330769Z",
                "updated_at": "2024-05-12T09:00:23.173206Z",
                "is_anonymous": false
            }
        }
    },
    "session": {
        "data": {
            "session": {
                "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IlNsdzV4WjZxVlFabVdqd1AiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE1NTA4MDIzLCJpYXQiOjE3MTU1MDQ0MjMsImlzcyI6Imh0dHBzOi8vcXllYnN3dnF4ZnRtd2VnenJ3cHguc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjRhNmY2OWVmLTU5ZTktNDkzYy1iOTE5LWEwMDIxZTcyZjY4NiIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiNGE2ZjY5ZWYtNTllOS00OTNjLWI5MTktYTAwMjFlNzJmNjg2In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTU1MDQ0MjN9XSwic2Vzc2lvbl9pZCI6IjU1OWY4OGRmLWNjNzEtNGI1Mi05ZGNjLWI1ZTgyNDMwMjM3MyIsImlzX2Fub255bW91cyI6ZmFsc2V9.NmraAGNDrxhS4e__o3VaoUd4HdKNIEKaQ1AsqEqdwPg",
                "token_type": "bearer",
                "expires_in": 3600,
                "expires_at": 1715508023,
                "refresh_token": "MF_CwuDgKm_PSfXZvwXZDg",
                "user": {
                    "id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                    "aud": "authenticated",
                    "role": "authenticated",
                    "email": "test@gmail.com",
                    "email_confirmed_at": "2024-05-12T03:21:14.336535Z",
                    "phone": "",
                    "confirmed_at": "2024-05-12T03:21:14.336535Z",
                    "last_sign_in_at": "2024-05-12T09:00:23.170554356Z",
                    "app_metadata": {
                        "provider": "email",
                        "providers": [
                            "email"
                        ]
                    },
                    "user_metadata": {
                        "email": "test@gmail.com",
                        "email_verified": false,
                        "phone_verified": false,
                        "sub": "4a6f69ef-59e9-493c-b919-a0021e72f686"
                    },
                    "identities": [
                        {
                            "identity_id": "c06e6b71-d52e-4d41-a300-589b16c5a864",
                            "id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                            "user_id": "4a6f69ef-59e9-493c-b919-a0021e72f686",
                            "identity_data": {
                                "email": "test@gmail.com",
                                "email_verified": false,
                                "phone_verified": false,
                                "sub": "4a6f69ef-59e9-493c-b919-a0021e72f686"
                            },
                            "provider": "email",
                            "last_sign_in_at": "2024-05-12T03:21:14.333657Z",
                            "created_at": "2024-05-12T03:21:14.333704Z",
                            "updated_at": "2024-05-12T03:21:14.333704Z",
                            "email": "test@gmail.com"
                        }
                    ],
                    "created_at": "2024-05-12T03:21:14.330769Z",
                    "updated_at": "2024-05-12T09:00:23.173206Z",
                    "is_anonymous": false
                }
            }
        },
        "error": null
    }
}
```

# /api/sign-out (POST)
```json
// this endpoint doesn't have request body

// response body
{
    "message": "Sign out success"
}
```

# /api/send (POST)
when /api/send called, the application will insert data to the Transaction and Payment History with the type "send"
```json
// request body
{
    "type": "credit",
    "amount": 10
}

// response body
{
    "message": "Successfully send money to account",
    "payment_account": {
        "id": 1,
        "type": "credit",
        "email": "test@gmail.com",
        "createdAt": "2024-05-12T09:06:41.087Z",
        "updatedAt": "2024-05-12T09:06:41.087Z"
    },
    "transaction": {
        "id": 4,
        "amount": 10,
        "status": "Success",
        "to_address": "test@gmail.com",
        "type": "Send",
        "payment_account_id": 1
    },
    "payment_history": {
        "id": 2,
        "status": "Success",
        "transaction_id": 4,
        "payment_date": "2024-05-12T09:23:27.245Z"
    }
}
```

# /api/withdraw (POST)
when /api/withdraw called, the application will insert data to the Transaction and Payment History with the type "withdraw"
```json
// request body
{
    "type": "credit",
    "amount": 10
}

// response body
{
    "message": "Successfully withdraw from account",
    "payment_account": {
        "id": 1,
        "type": "credit",
        "email": "test@gmail.com",
        "createdAt": "2024-05-12T09:06:41.087Z",
        "updatedAt": "2024-05-12T09:06:41.087Z"
    },
    "transaction": {
        "id": 5,
        "amount": 10,
        "status": "Success",
        "to_address": "test@gmail.com",
        "type": "Withdraw",
        "payment_account_id": 1
    },
    "payment_history": {
        "id": 3,
        "status": "Success",
        "transaction_id": 5,
        "payment_date": "2024-05-12T09:24:48.968Z"
    }
}
```

# /api/transaction-history (GET)
it will get transaction histories from the authenticated user
```json
// doesn't have request body

// response body
{
    "message": "All transaction by test@gmail.com",
    "transaction": [
        {
            "id": 3,
            "status": "Success",
            "type": "Send",
            "amount": 10,
            "to_address": "test@gmail.com",
            "payment_history": {
                "payment_date": "2024-05-12T09:16:19.199Z"
            },
            "payment_account": {
                "email": "test@gmail.com",
                "type": "credit"
            }
        },
        {
            "id": 4,
            "status": "Success",
            "type": "Send",
            "amount": 10,
            "to_address": "test@gmail.com",
            "payment_history": {
                "payment_date": "2024-05-12T09:23:27.245Z"
            },
            "payment_account": {
                "email": "test@gmail.com",
                "type": "credit"
            }
        },
        {
            "id": 5,
            "status": "Success",
            "type": "Withdraw",
            "amount": 10,
            "to_address": "test@gmail.com",
            "payment_history": {
                "payment_date": "2024-05-12T09:24:48.968Z"
            },
            "payment_account": {
                "email": "test@gmail.com",
                "type": "credit"
            }
        }
    ]
}
```

# /api/all-transaction-history (GET)
it will get all transaction histories from all users
```json
// doesn't have request body

// response body
{
    "message": "All transaction",
    "transaction": [
        {
            "id": 3,
            "status": "Success",
            "type": "Send",
            "amount": 10,
            "to_address": "test@gmail.com",
            "payment_history": {
                "payment_date": "2024-05-12T09:16:19.199Z"
            },
            "payment_account": {
                "email": "test@gmail.com",
                "type": "credit"
            }
        },
        {
            "id": 4,
            "status": "Success",
            "type": "Send",
            "amount": 10,
            "to_address": "test@gmail.com",
            "payment_history": {
                "payment_date": "2024-05-12T09:23:27.245Z"
            },
            "payment_account": {
                "email": "test@gmail.com",
                "type": "credit"
            }
        },
        {
            "id": 5,
            "status": "Success",
            "type": "Withdraw",
            "amount": 10,
            "to_address": "test@gmail.com",
            "payment_history": {
                "payment_date": "2024-05-12T09:24:48.968Z"
            },
            "payment_account": {
                "email": "test@gmail.com",
                "type": "credit"
            }
        }
    ]
}
```

# /api/account/all (GET)
it will get all payment accounts from all users
```json
// doesn't have request body

// response body
{
    "message": "All Payment Account",
    "payment_account": [
        {
            "id": 1,
            "type": "credit",
            "email": "test@gmail.com",
            "createdAt": "2024-05-12T09:06:41.087Z",
            "updatedAt": "2024-05-12T09:06:41.087Z"
        },
        {
            "id": 2,
            "type": "credit",
            "email": "oke@gmail.com",
            "createdAt": "2024-05-12T09:29:26.348Z",
            "updatedAt": "2024-05-12T09:29:26.348Z"
        }
    ]
}
```

# /api/account/ (GET)
it will get all payment accounts from the authenticated users
```json
// doesn't have request body

// response body
{
    "message": "All Payment Account owned by oke@gmail.com",
    "payment_account": [
        {
            "id": 2,
            "type": "credit",
            "email": "oke@gmail.com",
            "createdAt": "2024-05-12T09:29:26.348Z",
            "updatedAt": "2024-05-12T09:29:26.348Z"
        }
    ]
}
```

# /api/account/ (POST)
create a payment account on with the authenticated user
```json
// request body
{
    "type": "credit"
}

// response body
{
    "message": "Payment account created successfully",
    "newAccount": {
        "id": 2,
        "type": "credit",
        "email": "oke@gmail.com",
        "createdAt": "2024-05-12T09:29:26.348Z",
        "updatedAt": "2024-05-12T09:29:26.348Z"
    }
}
```

# /api/account/{id} (GET)
create a payment account by id
```json
// doesn't have request body

// response body
{
    "message": "Payment account by id : 1",
    "payment_account": [
        {
            "id": 1,
            "type": "credit",
            "email": "test@gmail.com",
            "createdAt": "2024-05-12T09:06:41.087Z",
            "updatedAt": "2024-05-12T09:06:41.087Z"
        }
    ]
}
```