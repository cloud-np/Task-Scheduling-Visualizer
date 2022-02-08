export default {
    "name": "1000Genome-synthetic-trace",
    "description": "Trace generated with WorkflowHub - https://workflowhub.org",
    "createdAt": "2021-02-16T11:55:37.912901",
    "schemaVersion": "1.0",
    "author": {
        "name": "cloud",
        "email": "support@workflowhub.org"
    },
    "wms": {
        "name": "WorkflowHub",
        "version": "0.4",
        "url": "https://workflowhub.readthedocs.io/en/v0.4/"
    },
    "workflow": {
        "executedAt": "20210216T135537+0200",
        "makespan": null,
        "jobs": [
            {
                "name": "individuals_00000001",
                "type": "compute",
                "runtime": 111.573,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "43829404-04ad-466d-a50d-fadae0343342.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "528e1e27-4d59-4887-836a-328d4412f1bd.vcf",
                        "size": 2721289267
                    },
                    {
                        "link": "output",
                        "name": "ddada37f-bbe9-4a10-bd8d-5199eaeebb4a.gz",
                        "size": 11311
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000002",
                "type": "compute",
                "runtime": 132.635,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "00702b13-9e03-498c-8dec-532174a93443.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "f183ed6c-1d4e-45d0-aa92-c37751757695.vcf",
                        "size": 2233624613
                    },
                    {
                        "link": "output",
                        "name": "3627e448-bddd-4ded-b0d7-1f386b091516.gz",
                        "size": 4190
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000003",
                "type": "compute",
                "runtime": 19.223,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "da3418f9-1e06-4f60-838b-0f8ca66e2d43.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "986f3655-6e8c-4560-8bdd-85d19ad14368.vcf",
                        "size": 957606015
                    },
                    {
                        "link": "output",
                        "name": "32ca54cd-1101-4146-9734-0ef76a077ca8.gz",
                        "size": 19114
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000004",
                "type": "compute",
                "runtime": 68.923,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "0b41c9cb-688b-46e6-aa08-427f164f58ea.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "f50a7ea5-e56a-4a6a-9e7f-506dc589f46f.vcf",
                        "size": 1122307833
                    },
                    {
                        "link": "output",
                        "name": "a212b6fe-a0ea-42c4-9c23-094303a2c65c.gz",
                        "size": 2931
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000005",
                "type": "compute",
                "runtime": 78.008,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "aa097f87-1ca5-4a65-b07f-7bfa58460812.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "2e629374-e585-4f5d-b3ac-505b1fa242ec.vcf",
                        "size": 914821042
                    },
                    {
                        "link": "output",
                        "name": "14b20c4a-dd41-4ac3-aed5-05531e82a5fa.gz",
                        "size": 20287
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000006",
                "type": "compute",
                "runtime": 133.87,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e3eb352e-ceac-4968-b7a9-392a7d12f37e.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "758e9489-5a48-40f1-b8d6-caeebedb456f.vcf",
                        "size": 2651018635
                    },
                    {
                        "link": "output",
                        "name": "eadd17b7-f51b-44a9-9bbe-f0fd6482723b.gz",
                        "size": 8288
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000007",
                "type": "compute",
                "runtime": 76.197,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "013cf888-c299-44da-a6ee-59fed85d493b.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "9dac4e73-1813-4145-be24-be3a7c840a63.vcf",
                        "size": 1834019021
                    },
                    {
                        "link": "output",
                        "name": "3fed4ab8-ca95-4bbb-8093-d98663901044.gz",
                        "size": 19725
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000008",
                "type": "compute",
                "runtime": 19.223,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "dfc8d819-ad21-4c91-8402-76a6bbd5d37a.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "2eae6283-3e73-4c7b-8357-8055df868605.vcf",
                        "size": 1748061987
                    },
                    {
                        "link": "output",
                        "name": "1d207732-7537-4213-8ff7-f3530fe99804.gz",
                        "size": 11400
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000009",
                "type": "compute",
                "runtime": 120.778,
                "parents": [],
                "children": [
                    "individuals_merge_00000010"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f88c9ef0-3db4-4168-999e-6860bd6616db.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "1dfed7b1-0f6c-4891-8a44-84441e1fb9f0.vcf",
                        "size": 2188076743
                    },
                    {
                        "link": "output",
                        "name": "501c6ce4-3bcf-4ef8-8924-c4bd2e60000c.gz",
                        "size": 16838
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_merge_00000010",
                "type": "compute",
                "runtime": 226.857,
                "parents": [
                    "individuals_00000001",
                    "individuals_00000002",
                    "individuals_00000003",
                    "individuals_00000004",
                    "individuals_00000005",
                    "individuals_00000006",
                    "individuals_00000007",
                    "individuals_00000008",
                    "individuals_00000009"
                ],
                "children": [
                    "mutation_overlap_00000012",
                    "mutation_overlap_00000013",
                    "mutation_overlap_00000014",
                    "mutation_overlap_00000015",
                    "mutation_overlap_00000016",
                    "mutation_overlap_00000017",
                    "mutation_overlap_00000018",
                    "frequency_00000019",
                    "frequency_00000020",
                    "frequency_00000021",
                    "frequency_00000022",
                    "frequency_00000023",
                    "frequency_00000024",
                    "frequency_00000025"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "ddada37f-bbe9-4a10-bd8d-5199eaeebb4a.gz",
                        "size": 11311
                    },
                    {
                        "link": "input",
                        "name": "3627e448-bddd-4ded-b0d7-1f386b091516.gz",
                        "size": 4190
                    },
                    {
                        "link": "input",
                        "name": "32ca54cd-1101-4146-9734-0ef76a077ca8.gz",
                        "size": 19114
                    },
                    {
                        "link": "input",
                        "name": "a212b6fe-a0ea-42c4-9c23-094303a2c65c.gz",
                        "size": 2931
                    },
                    {
                        "link": "input",
                        "name": "14b20c4a-dd41-4ac3-aed5-05531e82a5fa.gz",
                        "size": 20287
                    },
                    {
                        "link": "input",
                        "name": "eadd17b7-f51b-44a9-9bbe-f0fd6482723b.gz",
                        "size": 8288
                    },
                    {
                        "link": "input",
                        "name": "3fed4ab8-ca95-4bbb-8093-d98663901044.gz",
                        "size": 19725
                    },
                    {
                        "link": "input",
                        "name": "1d207732-7537-4213-8ff7-f3530fe99804.gz",
                        "size": 11400
                    },
                    {
                        "link": "input",
                        "name": "501c6ce4-3bcf-4ef8-8924-c4bd2e60000c.gz",
                        "size": 16838
                    },
                    {
                        "link": "output",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    }
                ],
                "cores": 1
            },
            {
                "name": "sifting_00000011",
                "type": "compute",
                "runtime": 2.269,
                "parents": [],
                "children": [
                    "mutation_overlap_00000012",
                    "mutation_overlap_00000013",
                    "mutation_overlap_00000014",
                    "mutation_overlap_00000015",
                    "mutation_overlap_00000016",
                    "mutation_overlap_00000017",
                    "mutation_overlap_00000018",
                    "frequency_00000019",
                    "frequency_00000020",
                    "frequency_00000021",
                    "frequency_00000022",
                    "frequency_00000023",
                    "frequency_00000024",
                    "frequency_00000025"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "342ad769-fb5c-4009-870d-4e478e313428.vcf",
                        "size": 1775755183
                    },
                    {
                        "link": "output",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000012",
                "type": "compute",
                "runtime": 9.215,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "f0f4d355-eaeb-4352-bf39-25957cdc79bbALL",
                        "size": 28000
                    },
                    {
                        "link": "output",
                        "name": "32f5fe5f-4b99-485b-be87-40555345c974.gz",
                        "size": 158238
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000013",
                "type": "compute",
                "runtime": 56.397,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "07807952-0588-4f6d-b0de-fd44f0f744ebAFR",
                        "size": 8088
                    },
                    {
                        "link": "output",
                        "name": "ce20e47e-68da-44a4-9ee0-e71d484a8bf8.gz",
                        "size": 162608
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000014",
                "type": "compute",
                "runtime": 9.215,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "03aeb50e-81a8-4872-9a74-c5010071653fAMR",
                        "size": 4248
                    },
                    {
                        "link": "output",
                        "name": "ab9288db-7461-4f32-8273-0f44d1be805b.gz",
                        "size": 179057
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000015",
                "type": "compute",
                "runtime": 60.748,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "85e75c3b-80f3-493f-a6cd-c3b9d6fa3a8eEAS",
                        "size": 4896
                    },
                    {
                        "link": "output",
                        "name": "171a2cdf-fdd8-42f8-82a7-7813aac2a93a.gz",
                        "size": 134940
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000016",
                "type": "compute",
                "runtime": 53.249,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "210001f5-356b-4151-8749-9bc824c8861cEUR",
                        "size": 5312
                    },
                    {
                        "link": "output",
                        "name": "688feb78-4477-4624-958d-c9705989b411.gz",
                        "size": 114180
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000017",
                "type": "compute",
                "runtime": 9.215,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "227840cc-27fd-4d34-b0bc-509cfa7a46acGBR",
                        "size": 856
                    },
                    {
                        "link": "output",
                        "name": "5a58a819-d524-452a-8698-a707b63afa64.gz",
                        "size": 105815
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000018",
                "type": "compute",
                "runtime": 46.343,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "66ddca05-9d02-42a9-aa01-fd88771bfd3cSAS",
                        "size": 5248
                    },
                    {
                        "link": "output",
                        "name": "10b58f89-e9ee-42bf-aa69-7f454398b3fe.gz",
                        "size": 38386
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000019",
                "type": "compute",
                "runtime": 39.369,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "8399454b-1785-42ca-9716-aa681f395dd9ALL",
                        "size": 28000
                    },
                    {
                        "link": "output",
                        "name": "44ec5aae-3d06-40a5-9472-c8e109eebddb.gz",
                        "size": 250126
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000020",
                "type": "compute",
                "runtime": 131.772,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "1f3eeba6-857c-40c1-bc4e-3433b72acb3cAFR",
                        "size": 8088
                    },
                    {
                        "link": "output",
                        "name": "029de470-ea72-4a82-9f6f-c38292009c0c.gz",
                        "size": 170141
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000021",
                "type": "compute",
                "runtime": 23.826,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "c0066e89-4a5d-477e-bcdb-3574f515bb98AMR",
                        "size": 4248
                    },
                    {
                        "link": "output",
                        "name": "7e7e5c9c-480c-4ae7-956e-0e2da6a6d6c3.gz",
                        "size": 186147
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000022",
                "type": "compute",
                "runtime": 84.525,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "6c9a2029-7fca-4262-98e7-57782ef55001EAS",
                        "size": 4896
                    },
                    {
                        "link": "output",
                        "name": "488b259d-0ba5-4363-af67-8663c6d17366.gz",
                        "size": 67156
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000023",
                "type": "compute",
                "runtime": 83.521,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "606111f8-8646-4d91-98ce-c4763e1bfd1dEUR",
                        "size": 5312
                    },
                    {
                        "link": "output",
                        "name": "2114aa67-d2ba-480c-afdc-a501b688a3f8.gz",
                        "size": 170269
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000024",
                "type": "compute",
                "runtime": 23.826,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "06f0d7d8-d245-4196-84bb-d61b95dc36faGBR",
                        "size": 856
                    },
                    {
                        "link": "output",
                        "name": "9064d0fa-36a7-48a4-bed0-1e391556900a.gz",
                        "size": 29848
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000025",
                "type": "compute",
                "runtime": 79.117,
                "parents": [
                    "individuals_merge_00000010",
                    "sifting_00000011"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "59070003-04fc-4884-ac87-bcb8edf7b713.gz",
                        "size": 12879
                    },
                    {
                        "link": "input",
                        "name": "592c1538-152f-4448-b94c-ab3955684f01.txt",
                        "size": 212661
                    },
                    {
                        "link": "input",
                        "name": "4879f07e-ab1e-4c60-b79f-66866e028931SAS",
                        "size": 5248
                    },
                    {
                        "link": "output",
                        "name": "2d70f2ea-e98f-4e8b-ad43-804c790004f4.gz",
                        "size": 95984
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000026",
                "type": "compute",
                "runtime": 19.223,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "6425f564-aedb-4d8b-8cae-f614494011f5.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "c9bd16d3-3d54-464b-99ad-c83c0e2c8cb4.vcf",
                        "size": 2107858899
                    },
                    {
                        "link": "output",
                        "name": "91fdc205-4caa-47ed-be09-9ef5b25a0a54.gz",
                        "size": 16225
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000027",
                "type": "compute",
                "runtime": 156.59,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "62462806-efb4-4064-a9dc-dff2f83f2050.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "0d47136e-8ec7-485e-9a9c-b3d27477d2b9.vcf",
                        "size": 2642918609
                    },
                    {
                        "link": "output",
                        "name": "6547cffc-3cea-4768-85db-ffc40fd9b07b.gz",
                        "size": 2931
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000028",
                "type": "compute",
                "runtime": 38.282,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "6e3da60d-4f63-427b-9d0b-793f25ed8b49.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "984ddf1c-490c-47c7-b9b0-47943f52f20a.vcf",
                        "size": 2107732518
                    },
                    {
                        "link": "output",
                        "name": "c5d2f4f8-b1b2-499c-b39a-a15130a0f5b1.gz",
                        "size": 12933
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000029",
                "type": "compute",
                "runtime": 116.298,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "9ac9d9d3-bb11-4c28-8d65-d50c9c2eec91.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "d8aace14-f794-4739-a4ec-d36f36f2768f.vcf",
                        "size": 895594267
                    },
                    {
                        "link": "output",
                        "name": "a4ef1a71-5108-48af-8df1-f5d99568e11e.gz",
                        "size": 2931
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000030",
                "type": "compute",
                "runtime": 72.929,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "0a3e62ed-ace0-4037-b2b2-3fd7a4cb2117.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "bf7547b5-c650-4799-b39c-aaeeb4100f41.vcf",
                        "size": 1595371774
                    },
                    {
                        "link": "output",
                        "name": "8ad10d2d-05d2-4d4b-8483-0aecfa524737.gz",
                        "size": 19884
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000031",
                "type": "compute",
                "runtime": 19.223,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "438c1f5e-fe1d-4c37-a55c-b4242c44720e.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "09aca6ce-4b73-4ca5-bb58-d83e0fb0741c.vcf",
                        "size": 2637452306
                    },
                    {
                        "link": "output",
                        "name": "f9acb612-0d90-497a-a0af-cd556b203257.gz",
                        "size": 14121
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000032",
                "type": "compute",
                "runtime": 53.461,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "974daf25-2335-4db4-a532-965cf60cf3c3.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "ea434238-2d93-411d-8552-6bc9c29b5e84.vcf",
                        "size": 1185540714
                    },
                    {
                        "link": "output",
                        "name": "1c01d9d4-8edc-4bbd-be94-3cdb59de8d5e.gz",
                        "size": 27153
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000033",
                "type": "compute",
                "runtime": 96.617,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "368afc57-4c1d-42a5-b7e6-4cc23a0d1150.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "1054c00f-43f1-4259-9af9-8464cd1cb053.vcf",
                        "size": 1651961068
                    },
                    {
                        "link": "output",
                        "name": "2b3f1d02-71db-405d-8a09-7fc2b456ce92.gz",
                        "size": 27029
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_00000034",
                "type": "compute",
                "runtime": 99.455,
                "parents": [],
                "children": [
                    "individuals_merge_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "4d3231c6-eb1d-4a96-9ca6-b1ab92513939.txt",
                        "size": 20078
                    },
                    {
                        "link": "input",
                        "name": "ec976f59-2141-472c-9a86-f546c79b1b96.vcf",
                        "size": 918469364
                    },
                    {
                        "link": "output",
                        "name": "0f61d5d8-a719-401e-a4db-66619b7f0315.gz",
                        "size": 27192
                    }
                ],
                "cores": 1
            },
            {
                "name": "individuals_merge_00000035",
                "type": "compute",
                "runtime": 162.13,
                "parents": [
                    "individuals_00000026",
                    "individuals_00000027",
                    "individuals_00000028",
                    "individuals_00000029",
                    "individuals_00000030",
                    "individuals_00000031",
                    "individuals_00000032",
                    "individuals_00000033",
                    "individuals_00000034"
                ],
                "children": [
                    "mutation_overlap_00000037",
                    "mutation_overlap_00000038",
                    "mutation_overlap_00000039",
                    "mutation_overlap_00000040",
                    "mutation_overlap_00000041",
                    "mutation_overlap_00000042",
                    "mutation_overlap_00000043",
                    "frequency_00000044",
                    "frequency_00000045",
                    "frequency_00000046",
                    "frequency_00000047",
                    "frequency_00000048",
                    "frequency_00000049",
                    "frequency_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "91fdc205-4caa-47ed-be09-9ef5b25a0a54.gz",
                        "size": 16225
                    },
                    {
                        "link": "input",
                        "name": "6547cffc-3cea-4768-85db-ffc40fd9b07b.gz",
                        "size": 2931
                    },
                    {
                        "link": "input",
                        "name": "c5d2f4f8-b1b2-499c-b39a-a15130a0f5b1.gz",
                        "size": 12933
                    },
                    {
                        "link": "input",
                        "name": "a4ef1a71-5108-48af-8df1-f5d99568e11e.gz",
                        "size": 2931
                    },
                    {
                        "link": "input",
                        "name": "8ad10d2d-05d2-4d4b-8483-0aecfa524737.gz",
                        "size": 19884
                    },
                    {
                        "link": "input",
                        "name": "f9acb612-0d90-497a-a0af-cd556b203257.gz",
                        "size": 14121
                    },
                    {
                        "link": "input",
                        "name": "1c01d9d4-8edc-4bbd-be94-3cdb59de8d5e.gz",
                        "size": 27153
                    },
                    {
                        "link": "input",
                        "name": "2b3f1d02-71db-405d-8a09-7fc2b456ce92.gz",
                        "size": 27029
                    },
                    {
                        "link": "input",
                        "name": "0f61d5d8-a719-401e-a4db-66619b7f0315.gz",
                        "size": 27192
                    },
                    {
                        "link": "output",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    }
                ],
                "cores": 1
            },
            {
                "name": "sifting_00000036",
                "type": "compute",
                "runtime": 2.269,
                "parents": [],
                "children": [
                    "mutation_overlap_00000037",
                    "mutation_overlap_00000038",
                    "mutation_overlap_00000039",
                    "mutation_overlap_00000040",
                    "mutation_overlap_00000041",
                    "mutation_overlap_00000042",
                    "mutation_overlap_00000043",
                    "frequency_00000044",
                    "frequency_00000045",
                    "frequency_00000046",
                    "frequency_00000047",
                    "frequency_00000048",
                    "frequency_00000049",
                    "frequency_00000050"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "8e247599-27c6-4c6d-a4fd-cd6f5f97fa6e.vcf",
                        "size": 981835219
                    },
                    {
                        "link": "output",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000037",
                "type": "compute",
                "runtime": 9.215,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "7321accb-f126-45e1-bc31-daa0b6e2f647ALL",
                        "size": 28000
                    },
                    {
                        "link": "output",
                        "name": "22e68d43-9a60-47ef-8254-51061e7a2764.gz",
                        "size": 158839
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000038",
                "type": "compute",
                "runtime": 25.479,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "0dde23f3-7e88-4218-87e2-f472b931f1a9AFR",
                        "size": 8088
                    },
                    {
                        "link": "output",
                        "name": "c978cf9b-a1e6-4178-b248-7a117e9f80c2.gz",
                        "size": 124965
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000039",
                "type": "compute",
                "runtime": 26.497,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "3f4eaeb8-1faf-4ce4-a3ed-e2eafe20958aAMR",
                        "size": 4248
                    },
                    {
                        "link": "output",
                        "name": "5c728cd3-2d52-4098-b152-2d63bbc01176.gz",
                        "size": 60230
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000040",
                "type": "compute",
                "runtime": 9.215,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "92419bf2-1204-4497-84ff-daf4a8ca960fEAS",
                        "size": 4896
                    },
                    {
                        "link": "output",
                        "name": "2d812854-3db2-4f31-a734-759853da654b.gz",
                        "size": 176266
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000041",
                "type": "compute",
                "runtime": 9.215,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "f8a1b07b-b8bd-46d8-ac06-6a87b2404dc1EUR",
                        "size": 5312
                    },
                    {
                        "link": "output",
                        "name": "11ac7584-14e6-412e-9ef5-250953d9b89b.gz",
                        "size": 143080
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000042",
                "type": "compute",
                "runtime": 68.891,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "1e429c15-8509-4b04-b7ad-c283b0fa7088GBR",
                        "size": 856
                    },
                    {
                        "link": "output",
                        "name": "625ffdab-6b51-4156-91d7-cb43ee52de88.gz",
                        "size": 146122
                    }
                ],
                "cores": 1
            },
            {
                "name": "mutation_overlap_00000043",
                "type": "compute",
                "runtime": 26.062,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "43917454-06f8-468c-881d-ae4f61739c6bSAS",
                        "size": 5248
                    },
                    {
                        "link": "output",
                        "name": "ef68db07-4258-45b7-a61c-92a9c1d01156.gz",
                        "size": 93114
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000044",
                "type": "compute",
                "runtime": 33.043,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "6079f1bc-b8fe-422e-82bb-52b7e0dcb935ALL",
                        "size": 28000
                    },
                    {
                        "link": "output",
                        "name": "84f7a56e-d119-4454-a669-0f902f7278b7.gz",
                        "size": 186288
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000045",
                "type": "compute",
                "runtime": 83.42,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "a8271354-806b-4361-9bff-9e2f0e658c40AFR",
                        "size": 8088
                    },
                    {
                        "link": "output",
                        "name": "8f16b449-994a-435a-aba2-6abfdf66a6ae.gz",
                        "size": 124988
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000046",
                "type": "compute",
                "runtime": 80.588,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "7f5d5c05-d167-4493-9ff6-b57b8730de92AMR",
                        "size": 4248
                    },
                    {
                        "link": "output",
                        "name": "0ba06662-7eda-437b-9cdb-ea37deaf2621.gz",
                        "size": 135189
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000047",
                "type": "compute",
                "runtime": 23.826,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "5ad1ad74-04b1-4a44-abdf-0906f8356f6aEAS",
                        "size": 4896
                    },
                    {
                        "link": "output",
                        "name": "ed95b30e-1edc-45f7-a5d2-e9a3650d22c5.gz",
                        "size": 128665
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000048",
                "type": "compute",
                "runtime": 23.826,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "d36c36b8-7903-40fa-a447-4b34c65e8876EUR",
                        "size": 5312
                    },
                    {
                        "link": "output",
                        "name": "9a684ecc-b201-46ba-b81b-570878d9fe65.gz",
                        "size": 100643
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000049",
                "type": "compute",
                "runtime": 42.018,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "d732de18-f955-43bd-8b3c-d3aebdb0c447GBR",
                        "size": 856
                    },
                    {
                        "link": "output",
                        "name": "5e0b1d1f-1da5-4107-8bfb-928d0c5d9a39.gz",
                        "size": 277323
                    }
                ],
                "cores": 1
            },
            {
                "name": "frequency_00000050",
                "type": "compute",
                "runtime": 96.608,
                "parents": [
                    "individuals_merge_00000035",
                    "sifting_00000036"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "5142c760-dac3-424d-bf4e-da8d0f9d792f.gz",
                        "size": 2733
                    },
                    {
                        "link": "input",
                        "name": "342fade8-a950-464e-bb83-fc9c365b9963.txt",
                        "size": 1111121
                    },
                    {
                        "link": "input",
                        "name": "2afc139c-03ba-456d-bcd2-ce4209bfcfefSAS",
                        "size": 5248
                    },
                    {
                        "link": "output",
                        "name": "23323ea0-91a4-41f2-834b-f41e6c931464.gz",
                        "size": 143396
                    }
                ],
                "cores": 1
            }
        ],
        "machines": []
    }
}