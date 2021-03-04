{
    "id": "09e13275-409a-4d20-a79b-bdecafe62223",
    "created": "1614869538749",
    "reconciliation_id": "23434534534",
    "provider_specific_data": {},
    "payment_method": {
        "type": "tokenized",
        "token": "7a380b1a-342e-4b28-ae05-4d70b0bc7444",
        "token_type": "credit_card",
        "holder_name": "Juan Perez",
        "expiration_date": "12/2024",
        "last_4_digits": "1111",
        "pass_luhn_validation": true,
        "fingerprint": "ec8a720a-1d63-4397-a491-2e8a26b544e0",
        "bin_number": "411111",
        "vendor": "VISA",
        "issuer": "JPMORGAN CHASE BANK, N.A.",
        "card_type": "CREDIT",
        "level": "",
        "country_code": "USA",
        "created": "1614869289982",
        "billing_address": {
            "country": "USA",
            "state": "TX",
            "city": "TX",
            "line1": "fifth avenue 10th",
            "phone": "+52-600-89-61",
            "email": "jperez@test.co"
        }
    },
    "result": {
        "status": "Succeed"
    },
    "provider_data": {
        "provider_name": "MockProcessor",
        "response_code": "0",
        "description": "Authorized.",
        "raw_response": "{\"OID\":\"47d6e167-8c6e-4061-b067-af1a91cf1cb5\",\"AUTH_CODE\":\"47d6e\",\"RETURN_MESSAGE\":\"Authorized.\",\"TRANSID\":\"846631cc-cec9-4703-991f-4dd8448f8814_ac94fd71-1978-4cde-914c-4c73c71bcf4e_Authorization\",\"STATUS\":\"SUCCESS\",\"AMOUNT\":\"40.97\",\"DATE\":\"1614869538748\",\"RETURN_CODE\":\"0\",\"CURRENCY\":\"USD\"}",
        "authorization_code": "47d6e",
        "transaction_id": "846631cc-cec9-4703-991f-4dd8448f8814_ac94fd71-1978-4cde-914c-4c73c71bcf4e_Authorization",
        "external_id": "47d6e167-8c6e-4061-b067-af1a91cf1cb5"
    },
    "amount": 4097,
    "provider_configuration": {
        "id": "b6dec575-c98e-4fb1-a0b6-8cefee38c484",
        "name": "server",
        "description": "server",
        "created": "1614707825595",
        "modified": "1614707825595",
        "account_id": "ac94fd71-1978-4cde-914c-4c73c71bcf4e",
        "provider_id": "c87ee096-e1a4-4502-9194-9e9b6e867bf0",
        "type": "cc_processor",
        "href": "https://api.paymentsos.com/accounts/ac94fd71-1978-4cde-914c-4c73c71bcf4e/provider-configurations/b6dec575-c98e-4fb1-a0b6-8cefee38c484"
    }
}
