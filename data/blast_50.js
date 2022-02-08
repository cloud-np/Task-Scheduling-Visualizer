export default {
    "name": "Blast-synthetic-instance",
    "description": "Instance generated with WfCommons - https://wfcommons.org",
    "createdAt": "2022-02-01T14:47:04.112281",
    "schemaVersion": "1.2",
    "author": {
        "name": "cloud",
        "email": "support@wfcommons.org"
    },
    "wms": {
        "name": "WfCommons",
        "version": "0.7",
        "url": "https://docs.wfcommons.org/en/v0.7/"
    },
    "workflow": {
        "executedAt": "20220201T164704+0200",
        "makespan": 0,
        "jobs": [
            {
                "name": "split_fasta_00000001",
                "type": "compute",
                "runtime": 0.367,
                "command": {
                    "program": "split_fasta"
                },
                "parents": [],
                "children": [
                    "blastall_00000002",
                    "blastall_00000003",
                    "blastall_00000004",
                    "blastall_00000005",
                    "blastall_00000006",
                    "blastall_00000007",
                    "blastall_00000008",
                    "blastall_00000009",
                    "blastall_00000010",
                    "blastall_00000011",
                    "blastall_00000012",
                    "blastall_00000013",
                    "blastall_00000014",
                    "blastall_00000015",
                    "blastall_00000016",
                    "blastall_00000017",
                    "blastall_00000018",
                    "blastall_00000019",
                    "blastall_00000020",
                    "blastall_00000021",
                    "blastall_00000022",
                    "blastall_00000023",
                    "blastall_00000024",
                    "blastall_00000025",
                    "blastall_00000026",
                    "blastall_00000027",
                    "blastall_00000028",
                    "blastall_00000029",
                    "blastall_00000030",
                    "blastall_00000031",
                    "blastall_00000032",
                    "blastall_00000033",
                    "blastall_00000034",
                    "blastall_00000035",
                    "blastall_00000036",
                    "blastall_00000037",
                    "blastall_00000038",
                    "blastall_00000039",
                    "blastall_00000040",
                    "blastall_00000041",
                    "blastall_00000044",
                    "blastall_00000045",
                    "blastall_00000046",
                    "blastall_00000047",
                    "blastall_00000048"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "f89d8100-1f54-47c0-af1d-c004b7812ed9.fasta",
                        "size": 201388
                    },
                    {
                        "link": "input",
                        "name": "5e663cdc-5547-4004-ad40-f630d682fe59split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "d8941859-cced-4ef5-bd3f-fec256bd77a7split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "8a68559e-9328-4434-914d-9d7c6b400a3dsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "93f004b9-f650-49d7-beab-67a3d67c7d7esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "592f28fe-0bf6-42bb-9692-1f53aa4c5f4esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "2eb6625c-7e6e-44f1-824b-5d7697a5bb81split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "dd0af157-e866-4a6c-8b12-bf6f343c4caasplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "c4f8ec5c-032f-4823-b91c-db4c75442111split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "6482cfac-710e-4147-a17c-8223ff774533split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "01470b8d-d545-4f7f-9624-9193aac07a33split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "e4d61aa5-58c0-4df5-a147-05f80e56758fsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "f85224b1-532e-42ee-ab0a-c6aee57722c9split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "84fdfe18-cb71-4c4f-b3a8-3316691501f2split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "72db2179-63f4-449b-97b1-2ad301c8d4f5split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "ffd8e558-eb12-4bcf-8fb1-171417a8d24esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "7fd41437-fa42-4827-8287-e00b548ca537split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "b66839df-ba14-4127-8b32-75b3475a9dbasplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "c5b4b5b4-da3b-4e55-90a8-eb2da22e8ec1split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "b3046bd4-d35a-47a5-aa79-d3d98f86f888split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "7f750194-0e6a-4801-9b96-d1402218450dsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "785d02ec-20ea-4906-b866-8fcdbe8ad9c5split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "f4b62d36-87ba-41e3-9740-b31017056f84split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "0a690b70-a5db-42c2-8786-753fdc51fb00split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "5fc4fac4-6b3f-4c91-99b9-4d84d2b41d6csplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "ab9516f2-8746-46cf-be24-c2e3d055f5c2split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "71c64c84-2b5c-467c-b85b-def07f1fe12fsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "bd8aca83-83f7-46b2-8b68-ecf312802fb9split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "d8e4301d-7255-4d97-a001-047988f47361split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "ebce133d-6a41-4966-8ef5-b2a536a519fesplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "bba6dbea-7dbd-4d18-837e-7538b0dea1f5split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "f89b0af2-828e-4641-9945-c2c8d2fd3768split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "c71dc88c-cd38-4879-890c-c06220904488split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "fc5bb171-bf85-485b-a197-10e4a8f1876esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "a84ab9f6-3ed9-49d2-a46c-e102b761b8easplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "b04bea44-5c98-4532-8ed5-6a83e1954c82split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "4ba61c17-94da-4027-8d19-433d7bc93ce7split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "0b2dca57-5165-4849-bc3c-ddd14ed976casplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "2000f984-f6eb-4183-a468-22557d5eadeasplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "b36b10b1-d609-480a-a2ef-e1f633f52938split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "5daebdb3-a0aa-48a1-b5f6-6013c1332118split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "b792a07b-14db-444b-919b-448a2d0c7b03split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "48a34bcf-152f-4b6b-8b0d-8e51c08a5c2asplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "2c0ca614-90e1-4c68-aaf0-5a8035c17e25split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "56d445bd-c46f-4eb4-9eff-7bd4b142011dsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "baae4fd3-25e8-4191-abbf-b5075fcff41csplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "bbd18024-2806-4e81-ad06-48d7a6cbddcasplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "88168517-4b49-41e8-b801-f466cb65140dsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "c5235f4f-2953-4c2b-a9ae-0153738d526fsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "599140bd-cb5c-4ae8-a140-230bb49795dbsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "393ad4a2-6ebd-494c-84a0-4a60319532dbsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "afbc2d7e-f050-4174-be4c-90b2ae9df5a3split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "88c99f71-e046-47d8-a2cc-f85d1589bb6asplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "1cd82bb1-31ce-4f16-b620-9d3ab862ee90split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "70241151-9853-4b6e-9e24-76b3ff241444split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "6e5724c0-6f9f-4875-8122-1d67cc5b667esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "25f1cfed-e362-4233-8947-f6a5972fc6b9split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "64e96114-e7a1-458f-8576-bd22df45c980split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "f53d2699-daef-4df6-bc3f-58212292649esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "7c67c79d-3707-410d-bbf6-0f8c01fadc85split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "fd8eff94-eacf-4857-83cd-44a5263882c8split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "3961ca3e-4c02-4cc8-92f5-31ae7e0a98bbsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "25838d4e-5ce3-4513-804a-dea023dcda37split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "b3f03137-3661-4817-a3ec-1b5e105622d0split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "50667ee7-6c31-4232-b639-71a7fab50873split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "472cd34e-a417-4315-8e98-469a4d034eecsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "23f33641-e639-4456-b134-1d0d4c1eb91bsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "de84a372-de40-4bfb-84cf-b1f410e346a0split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "97e677d4-a80e-4d57-9113-d38d26bebad8split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "24480fd0-f94c-492b-9dad-69d8b6e0c9a4split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "d420eb6d-8c28-4e83-8a3a-3954e392cf7csplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "ebd3ab69-19de-4db2-b341-ce05846e801csplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "96eb3ebb-1b9d-4990-bb40-de30ae8c75desplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "f63e11bf-4412-4697-b565-590f6213f573split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "28ac66b1-dcfd-4bab-ad6f-c9dc054f0578split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "96bd6ddb-d411-413e-8962-333a9e535403split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "0900ba5c-eb1f-4e48-97ff-3bc0517d2f50split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "2853a5b9-f4fa-4815-924b-a7104ae8cf15split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "0f8e1cb9-d35a-4bf6-a1be-93cb2d41452bsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "19bc61ee-5f7d-4e45-99c6-f1739bb8c10dsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "ccd52d09-614d-4144-a3e7-b40eded7897esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "d1995231-fd91-4da9-8c0b-39bec2e21a22split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "cbfc2682-d914-45ba-b53a-6c68dc9d531bsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "7c96b3bb-6811-4665-b805-7e73bd45e970split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "5daf9fa5-5c59-41cd-b6de-e5c82a934410split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "4edb282a-1c1e-4bca-aa2a-addfe44d4f19split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "26c1ef66-027d-4775-b274-6217a67f0653split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "241d1853-c59c-4bfb-b702-6a518bef45fcsplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "96ef529a-0ad6-4f49-ad92-a375b804221esplit_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "09218eb3-cbab-4ace-9b74-50a5d39d7427split_fasta",
                        "size": 1
                    },
                    {
                        "link": "input",
                        "name": "b366d792-ef40-411d-8e25-4770fc02ee4asplit_fasta",
                        "size": 1
                    }
                ],
                "cores": 1,
                "id": "00000001",
                "category": "split_fasta"
            },
            {
                "name": "blastall_00000002",
                "type": "compute",
                "runtime": 1515.275,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "35c34ecf-3e5c-447d-9464-3de38379bf6d.out",
                        "size": 5180
                    },
                    {
                        "link": "output",
                        "name": "9fceab1b-806b-4d92-8891-ba4ab4b2afb7.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "f4f1263d-86ab-4f30-832f-1961db6fecd6blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "f0c09770-d61c-4ab9-a841-ae1606998067nt",
                        "size": 5212318473
                    },
                    {
                        "link": "input",
                        "name": "3e084756-b9b5-4857-93fb-8af2889b2bd9blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "65a66253-d6ab-4fa2-9449-ff16f858886ent",
                        "size": 3899933388
                    }
                ],
                "cores": 1,
                "id": "00000002",
                "category": "blastall"
            },
            {
                "name": "blastall_00000003",
                "type": "compute",
                "runtime": 1753.536,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "11e47061-0f1d-41d8-96e3-3f87de53da7a.out",
                        "size": 16767
                    },
                    {
                        "link": "output",
                        "name": "37d80586-4593-4191-8b32-c658d0faa82c.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "99f1ab01-a54f-4dff-ad36-acebb0affea7blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "03820df0-ea07-410e-b8a5-a3e98b8c6de1nt",
                        "size": 5057455433
                    },
                    {
                        "link": "input",
                        "name": "39ad3a2e-01a4-4df9-87db-5ac73cb9065ablastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "61c20e00-86e0-4a3d-b6be-ef71263bff5fnt",
                        "size": 4071908543
                    }
                ],
                "cores": 1,
                "id": "00000003",
                "category": "blastall"
            },
            {
                "name": "blastall_00000004",
                "type": "compute",
                "runtime": 1626.853,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "fb7a4a39-269c-4fbc-ae92-418ac632cba7.out",
                        "size": 16293
                    },
                    {
                        "link": "output",
                        "name": "7d3dd3e9-c5a0-4231-8114-4b13cc47d7b2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "9baa4980-13ce-4429-93d6-d54865a9bf41blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "f01543a9-64a4-44f7-bc5b-a1da5a26db0ent",
                        "size": 4832696408
                    },
                    {
                        "link": "input",
                        "name": "1b7aa30b-7b71-4617-b0bb-9f92c2f5b479blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "c48907b4-290f-4be6-bac4-91934556afa1nt",
                        "size": 1422237626
                    }
                ],
                "cores": 1,
                "id": "00000004",
                "category": "blastall"
            },
            {
                "name": "blastall_00000005",
                "type": "compute",
                "runtime": 1916.323,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "58c5f0af-a01a-4162-a07d-abe13d40f409.out",
                        "size": 2375
                    },
                    {
                        "link": "output",
                        "name": "130aa66f-7770-4e45-b25a-ed9789906f27.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "daf59e1a-baaf-4bf3-8daa-24f0f3ed24ecblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "c59cb144-4e54-482b-8fcc-0f8f971b674fnt",
                        "size": 3318564017
                    },
                    {
                        "link": "input",
                        "name": "12d7cb5e-0539-49ec-8cc8-2cfe44f55765blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "cccd1afe-4cb1-4985-988b-7914e72b8bb8nt",
                        "size": 1862657518
                    }
                ],
                "cores": 1,
                "id": "00000005",
                "category": "blastall"
            },
            {
                "name": "blastall_00000006",
                "type": "compute",
                "runtime": 1071.055,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "cb8c0d35-dd35-4874-9869-acbfd56838a4.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "df38638d-1a2b-49de-82e0-d52bb1e63616.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "88bd51b1-ef10-48a3-8894-a71a4abc1fc3blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "8f00d946-6c37-407a-98a4-91f671bce39fnt",
                        "size": 4212673900
                    },
                    {
                        "link": "input",
                        "name": "f7918e3b-389b-4117-88b1-0a9bf85791bcblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "b693cdad-c5fb-4b0d-86ed-2784d530f0e5nt",
                        "size": 3512037817
                    }
                ],
                "cores": 1,
                "id": "00000006",
                "category": "blastall"
            },
            {
                "name": "blastall_00000007",
                "type": "compute",
                "runtime": 629.74,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "15517993-7d4a-45d5-b557-b19d2befd5a5.out",
                        "size": 4708
                    },
                    {
                        "link": "output",
                        "name": "b12b6770-885a-4888-ba71-1e92c457fc87.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "005619d8-433c-4291-92c0-eea3a672e05cblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "8ff7e11f-587a-4de3-8b7c-ac52ab7ea25cnt",
                        "size": 4525962128
                    },
                    {
                        "link": "input",
                        "name": "c8512cf4-1f84-434f-b092-956fb974c189blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "ff43fa4e-2570-487c-92c3-e38135d05285nt",
                        "size": 3451079178
                    }
                ],
                "cores": 1,
                "id": "00000007",
                "category": "blastall"
            },
            {
                "name": "blastall_00000008",
                "type": "compute",
                "runtime": 1666.741,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "47c44b85-f5f8-449c-8373-1c671083e1a6.out",
                        "size": 7572
                    },
                    {
                        "link": "output",
                        "name": "33b14145-fb56-431f-b34f-f3c2f8fadb88.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "021069de-c529-4a81-9a46-c0e42e159897blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "11409408-6188-4555-8696-09d5a3a47693nt",
                        "size": 2052721065
                    },
                    {
                        "link": "input",
                        "name": "ca3e52e8-f88b-40dc-be05-3a52d3697d44blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "6bd7ae8e-40f2-4067-94f8-b6e91d6cd9f5nt",
                        "size": 2926614932
                    }
                ],
                "cores": 1,
                "id": "00000008",
                "category": "blastall"
            },
            {
                "name": "blastall_00000009",
                "type": "compute",
                "runtime": 916.269,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "b3847398-db73-4501-bca7-a7998c4cd528.out",
                        "size": 16669
                    },
                    {
                        "link": "output",
                        "name": "aebc200a-cf24-4a18-8c87-4cfb3cb41a81.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "84ee9157-5da6-4a2b-974c-1e475434c028blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "231e2478-c1da-41dc-91e8-6abaa007d318nt",
                        "size": 3662788224
                    },
                    {
                        "link": "input",
                        "name": "e6ea4ad0-bb88-4b8e-89dc-ef190c416d3bblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "e9e012e3-b9ab-446b-99fd-be0ad94313b4nt",
                        "size": 5149748183
                    }
                ],
                "cores": 1,
                "id": "00000009",
                "category": "blastall"
            },
            {
                "name": "blastall_00000010",
                "type": "compute",
                "runtime": 877.153,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "573c1fe4-c90b-438d-af98-22800ca509f3.out",
                        "size": 3514
                    },
                    {
                        "link": "output",
                        "name": "dfb6f34e-7161-4f91-8f49-9b534e1e5787.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "36d7b2ff-3814-4a82-8aa6-4c926bd2a1c2blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "e9628f7b-693f-4101-b855-58b68ddc406fnt",
                        "size": 4935797995
                    },
                    {
                        "link": "input",
                        "name": "c52d10dd-7267-48ab-8e6d-621aa4177406blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "9e733ab0-b8bc-466c-83cc-3f06ec30f3b3nt",
                        "size": 1280988078
                    }
                ],
                "cores": 1,
                "id": "00000010",
                "category": "blastall"
            },
            {
                "name": "blastall_00000011",
                "type": "compute",
                "runtime": 830.497,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "436131e4-1a11-4e84-a936-77001ae446df.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "5d9707a0-f750-4def-a230-390757778917.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "8d5aa443-5cb1-4241-82c6-c91519a6c716blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "9d776520-cfc0-4ad3-ba1e-df9e42590e7fnt",
                        "size": 5449704886
                    },
                    {
                        "link": "input",
                        "name": "f75ba863-84a6-48ae-ac63-cd10c1e81b79blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "7d0a197c-1e66-47fc-b851-28c780a9d64dnt",
                        "size": 4414783438
                    }
                ],
                "cores": 1,
                "id": "00000011",
                "category": "blastall"
            },
            {
                "name": "blastall_00000012",
                "type": "compute",
                "runtime": 1937.318,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "7dba3377-454f-4b89-9a8c-4feb17dfac39.out",
                        "size": 13495
                    },
                    {
                        "link": "output",
                        "name": "fb2d6763-3f13-4ba4-92f3-280086b4b180.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "44401a61-01bd-465b-b6c0-eff7068db9a6blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "5468852f-d6f5-4ce1-8177-45ff065ccf6dnt",
                        "size": 1824272866
                    },
                    {
                        "link": "input",
                        "name": "daea9fc8-106f-4375-9ba1-a5ef70f2e961blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "0b21f42a-ed05-4bca-a4f9-e8d59fd4a43fnt",
                        "size": 1905548854
                    }
                ],
                "cores": 1,
                "id": "00000012",
                "category": "blastall"
            },
            {
                "name": "blastall_00000013",
                "type": "compute",
                "runtime": 682.71,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "1d1f89c1-946b-44f1-b117-813cfffd1fe5.out",
                        "size": 4354
                    },
                    {
                        "link": "output",
                        "name": "16787de2-6d09-4647-af19-fa0673088759.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "f827a7eb-2d61-489b-9dfd-13b10fbbf164blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "700a98bf-500c-4746-a88d-0872e5a20b96nt",
                        "size": 4502437156
                    },
                    {
                        "link": "input",
                        "name": "c0dfaa46-ebaa-4484-bdc3-09fd26e2376fblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "a6856472-8317-4968-85ae-bb9e7528e4ecnt",
                        "size": 2632255941
                    }
                ],
                "cores": 1,
                "id": "00000013",
                "category": "blastall"
            },
            {
                "name": "blastall_00000014",
                "type": "compute",
                "runtime": 1075.192,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "a89da07b-e4da-47a2-851d-929121e78c09.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "abeee7af-afcf-42d3-9f7b-98eda63cdaf2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "1101ae51-7eb8-4708-947e-93413b997723blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "4e23ae9c-7384-4ef8-a086-bce770bf7a01nt",
                        "size": 3449059177
                    },
                    {
                        "link": "input",
                        "name": "e7cc74fc-d8d2-4c42-b183-110548a35042blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "0f96bf9e-87b6-4358-80c9-0ec6472b6c3fnt",
                        "size": 3189814372
                    }
                ],
                "cores": 1,
                "id": "00000014",
                "category": "blastall"
            },
            {
                "name": "blastall_00000015",
                "type": "compute",
                "runtime": 912.971,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "a79e153d-0bf5-4f8b-922c-a4e631207f5c.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "9ce6d797-51ce-4f4b-8cf8-6e78a5aad089.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "8bde8a58-e965-4012-8c83-8aa3de5743b2blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "726ad93e-9aab-47fd-8a89-e837e4ab0e35nt",
                        "size": 5382548133
                    },
                    {
                        "link": "input",
                        "name": "1f331e82-9201-426a-a726-bf72e655f65bblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "1a5673f8-c68f-4992-8ee5-ab2d2ccc6c5dnt",
                        "size": 927573212
                    }
                ],
                "cores": 1,
                "id": "00000015",
                "category": "blastall"
            },
            {
                "name": "blastall_00000016",
                "type": "compute",
                "runtime": 1456.835,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "8008709c-934e-4dd3-aaeb-eac20bf02c50.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "8fff0081-b406-4b57-b644-f004e041a72d.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "935d1783-acf2-4dbd-8df0-2a7fd5c18f54blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "288de03c-5719-40c0-a78d-fabebb101387nt",
                        "size": 5530021916
                    },
                    {
                        "link": "input",
                        "name": "a33225c8-fd60-43a6-84d9-740e33902304blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "258e9a68-0dfd-48c2-8283-8ed6b4020730nt",
                        "size": 4707895565
                    }
                ],
                "cores": 1,
                "id": "00000016",
                "category": "blastall"
            },
            {
                "name": "blastall_00000017",
                "type": "compute",
                "runtime": 1293.707,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "075ba1a1-d7e7-447c-abf3-904ab9f6c4e4.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "8c7fcd1a-fc8d-4cc8-8673-4a030349afd5.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "30bad97a-1399-45a0-a7c0-ef1480388a0eblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "256ff8db-e59b-460b-bbed-5da4d478856ant",
                        "size": 4916229788
                    },
                    {
                        "link": "input",
                        "name": "81c0efc2-b7c1-4cf9-9ad5-1a43cf512ef1blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "16373140-42c8-43a3-ac6d-097ea4186794nt",
                        "size": 5298631858
                    }
                ],
                "cores": 1,
                "id": "00000017",
                "category": "blastall"
            },
            {
                "name": "blastall_00000018",
                "type": "compute",
                "runtime": 1610.596,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "01e5c5a8-4199-4dc9-9bc3-9a68dea88d26.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "364bd161-9a1f-49ee-8fe8-03deae646ca4.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "32b73539-76e2-4ab4-a2c5-83cf1069097eblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "f651ca4c-ed19-4dca-9ef7-db16e2b870dcnt",
                        "size": 5512583330
                    },
                    {
                        "link": "input",
                        "name": "1a35e8b2-dcde-4b55-92ed-ef003eec548ablastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "9fe3d183-fcf6-4e17-96ad-4f9eb197ddbfnt",
                        "size": 720805438
                    }
                ],
                "cores": 1,
                "id": "00000018",
                "category": "blastall"
            },
            {
                "name": "blastall_00000019",
                "type": "compute",
                "runtime": 179.956,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "acbd5670-2bc2-4fed-9486-d0bf65179be6.out",
                        "size": 10446
                    },
                    {
                        "link": "output",
                        "name": "989e751b-5f3e-453a-b24a-c39786da2141.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "11200922-cb10-4359-a0e5-f5ec2ffd97aablastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "c0b61634-1511-4122-a87e-56ca46135398nt",
                        "size": 3283380757
                    },
                    {
                        "link": "input",
                        "name": "1c0cb3c1-72c7-45d7-a731-82ab9c7675b7blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "7715c2b2-8d1e-49d7-92a7-66f1e2f729f4nt",
                        "size": 2062268895
                    }
                ],
                "cores": 1,
                "id": "00000019",
                "category": "blastall"
            },
            {
                "name": "blastall_00000020",
                "type": "compute",
                "runtime": 1872.021,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "8466289e-4432-4b44-98a9-4f28a7573664.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "a9801788-c8e2-4faa-b816-1759c8d85091.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "fffd4586-26ec-493d-bdfd-5a3c1606655dblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "4cf8b7fd-85b7-4f71-9f83-49d74b99914ant",
                        "size": 2932718527
                    },
                    {
                        "link": "input",
                        "name": "441a6053-5e52-4938-9fe2-b8a383f95c5eblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "121d4cc6-3b53-4e0e-b30c-b60450379d95nt",
                        "size": 5409307278
                    }
                ],
                "cores": 1,
                "id": "00000020",
                "category": "blastall"
            },
            {
                "name": "blastall_00000021",
                "type": "compute",
                "runtime": 1420.719,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "f2f00d19-af26-42e7-a843-c2cbe7dc2244.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "2d5b9bea-be08-42d4-a46e-ff5d012953e0.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "b5ece00b-d6ae-4e36-b05c-04858d18d189blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "ae4ec4d2-f053-44a4-83b6-32cbfc9fb9b8nt",
                        "size": 1012765440
                    },
                    {
                        "link": "input",
                        "name": "a8d4fd5a-b0ae-47ef-a086-36dc383b1744blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "8956c69e-3f90-4552-af31-b090b3def323nt",
                        "size": 1502717315
                    }
                ],
                "cores": 1,
                "id": "00000021",
                "category": "blastall"
            },
            {
                "name": "blastall_00000022",
                "type": "compute",
                "runtime": 850.961,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "ed442a7a-99cd-4dc8-8548-a18c622717d6.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "90f994ff-0d5b-4875-972c-213e4f8502b1.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "995e351d-3230-4621-9202-3d92b39bf667blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "784339bd-670c-47f3-b339-8ac16061b001nt",
                        "size": 2177160889
                    },
                    {
                        "link": "input",
                        "name": "ed2bafe9-3777-495a-b593-0e9d3c57c675blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "b942e7f2-e35d-44a2-aced-83c731d60e6fnt",
                        "size": 5323944654
                    }
                ],
                "cores": 1,
                "id": "00000022",
                "category": "blastall"
            },
            {
                "name": "blastall_00000023",
                "type": "compute",
                "runtime": 233.669,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "e330f830-f66c-4d18-a787-9767e2118df5.out",
                        "size": 7211
                    },
                    {
                        "link": "output",
                        "name": "5213510c-2340-4307-b248-cbe7f32caea2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "d4904e03-3acf-4400-a8c0-c8226be3ae4fblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "03e2db88-6dd3-4309-a84c-e0d2f4ba5063nt",
                        "size": 3774548329
                    },
                    {
                        "link": "input",
                        "name": "e8ce77b0-c37a-4a62-bc7e-4fa1b78d069fblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "989fad6b-376a-4a14-83d6-604b7f205d96nt",
                        "size": 5407535589
                    }
                ],
                "cores": 1,
                "id": "00000023",
                "category": "blastall"
            },
            {
                "name": "blastall_00000024",
                "type": "compute",
                "runtime": 1547.077,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "05c76ed3-58d9-4e05-aed0-a58c5974b5ba.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "c4ceb83f-96ce-4602-a741-af0b1235abdf.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "f2808524-9bee-41cf-a56b-19c395727124blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "2594941d-d499-4bdc-bb52-d0745fa0af9fnt",
                        "size": 3833604449
                    },
                    {
                        "link": "input",
                        "name": "820966b9-3e27-488f-a821-a429d64adf13blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "c465c594-7ba6-47f8-a616-9bc537c02bcent",
                        "size": 2244047078
                    }
                ],
                "cores": 1,
                "id": "00000024",
                "category": "blastall"
            },
            {
                "name": "blastall_00000025",
                "type": "compute",
                "runtime": 1855.39,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "be65cd8a-b231-4a9a-8096-535caf77933e.out",
                        "size": 2362
                    },
                    {
                        "link": "output",
                        "name": "4443ff57-8ca3-46d3-8078-5e1a590e79ff.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "ba04e3f0-ddda-41fc-82e6-09f4c8b5376bblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "0c22d9bf-c958-4e9b-80fd-8dcc97115a12nt",
                        "size": 2123732255
                    },
                    {
                        "link": "input",
                        "name": "aa192f5d-ae00-4cd2-b6f2-977a5f3a083fblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "dc949e50-4724-4778-a42f-d2f392e55df2nt",
                        "size": 3275360624
                    }
                ],
                "cores": 1,
                "id": "00000025",
                "category": "blastall"
            },
            {
                "name": "blastall_00000026",
                "type": "compute",
                "runtime": 1646.295,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "e7028fd2-e1ed-4b97-a74c-26b5e059b697.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "8fc0e5c9-7b36-471b-bcf9-48cd728e0f03.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "aa8e47de-0df6-46f8-a7fe-95f8e82a48c0blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "d5c08808-9cf0-4edd-96f0-a6fc637c3c54nt",
                        "size": 1659031686
                    },
                    {
                        "link": "input",
                        "name": "8d82bbfb-6112-488d-8d92-32b8c38e01a0blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "31ad9cd0-1dd9-401a-b029-1e3c535ff7c4nt",
                        "size": 1221387705
                    }
                ],
                "cores": 1,
                "id": "00000026",
                "category": "blastall"
            },
            {
                "name": "blastall_00000027",
                "type": "compute",
                "runtime": 958.074,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "262bc4d7-24fb-46b8-bd50-0be8c7c10e0e.out",
                        "size": 3633
                    },
                    {
                        "link": "output",
                        "name": "13a00e15-52c3-463a-a6d3-8f2d0d8e57e7.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "959e898f-4a0e-423f-9345-c53fa1dcaccablastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "b475635d-fead-424e-8298-8ba21d702a4fnt",
                        "size": 3824002213
                    },
                    {
                        "link": "input",
                        "name": "acf59ec7-f4d4-406e-995a-965ac8caa700blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "aad486ac-b4b8-46d8-b1a9-e503eec443c1nt",
                        "size": 4739448387
                    }
                ],
                "cores": 1,
                "id": "00000027",
                "category": "blastall"
            },
            {
                "name": "blastall_00000028",
                "type": "compute",
                "runtime": 179.956,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "76f3f459-177a-4d69-9792-6597161a8f29.out",
                        "size": 6898
                    },
                    {
                        "link": "output",
                        "name": "eaf39e76-8db5-401a-a4ab-fac67734448a.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "42923fb9-7888-49de-aab0-7cc6f3a55eb4blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "ab125072-e675-4d22-a007-4d4e129f6ef3nt",
                        "size": 4821787170
                    },
                    {
                        "link": "input",
                        "name": "c596d9e0-b027-4237-8b32-6b5f379d5d99blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "990cf03d-a662-4113-8d4c-1ee38c4b7032nt",
                        "size": 3527233010
                    }
                ],
                "cores": 1,
                "id": "00000028",
                "category": "blastall"
            },
            {
                "name": "blastall_00000029",
                "type": "compute",
                "runtime": 381.662,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "9cbcf478-2d41-462b-9f81-c8d2c3e8f3ae.out",
                        "size": 3918
                    },
                    {
                        "link": "output",
                        "name": "ad3409a3-e298-436e-ab40-7c770ee3dfe8.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "33e20ee2-a271-4891-b06c-53580078ea19blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "fd3163ae-c7a9-4a29-bd92-99361e393720nt",
                        "size": 1013294488
                    },
                    {
                        "link": "input",
                        "name": "b38cac1e-c709-4cc3-ac0c-b0687638854cblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "089690f4-e0a9-4177-b7ed-64edcdc98c35nt",
                        "size": 3931864590
                    }
                ],
                "cores": 1,
                "id": "00000029",
                "category": "blastall"
            },
            {
                "name": "blastall_00000030",
                "type": "compute",
                "runtime": 1189.031,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "30d2493e-f957-4379-bb5d-0061e63f4e50.out",
                        "size": 4169
                    },
                    {
                        "link": "output",
                        "name": "7fe274d4-8af5-490f-8b32-7fd86c94bc48.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "294d1478-83e6-4b8c-a1c8-3e1fee7dd45cblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "25df4b27-6dc2-4b83-b097-fdd72d509494nt",
                        "size": 5150126130
                    },
                    {
                        "link": "input",
                        "name": "1dae00da-2f60-4b4c-8260-32084e5f6e47blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "5eac97f7-d289-46cf-ba7c-e666b4491740nt",
                        "size": 1386406697
                    }
                ],
                "cores": 1,
                "id": "00000030",
                "category": "blastall"
            },
            {
                "name": "blastall_00000031",
                "type": "compute",
                "runtime": 903.757,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "036e1d30-f144-467e-a16d-b32d7cdd3f58.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "596bf6c5-56de-41db-a845-a99b55325c73.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "7ba7411e-218d-44c0-af1f-b225241926c7blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "42cec51a-041c-4e85-be8c-95be817f8991nt",
                        "size": 5198938570
                    },
                    {
                        "link": "input",
                        "name": "0cba3e37-2881-4165-863a-d0d3d16ba739blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "fefea9e0-8d0d-4cec-bc6b-f7b1d6903aa8nt",
                        "size": 3061613666
                    }
                ],
                "cores": 1,
                "id": "00000031",
                "category": "blastall"
            },
            {
                "name": "blastall_00000032",
                "type": "compute",
                "runtime": 1219.754,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "c98c12ef-18ce-4a1d-a66f-ea3bb89662c9.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "c80a098f-1638-4e32-85a7-ad28cf25531f.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "e5ec92d3-84bd-4a90-abbf-d880911ed25bblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "e2bcdfdf-ceb4-43a1-975b-a284f3060821nt",
                        "size": 2892607984
                    },
                    {
                        "link": "input",
                        "name": "fa72429c-4cf5-4f34-b898-7ab456589429blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "5d493119-8941-483b-9e0f-65a541558e79nt",
                        "size": 2586881129
                    }
                ],
                "cores": 1,
                "id": "00000032",
                "category": "blastall"
            },
            {
                "name": "blastall_00000033",
                "type": "compute",
                "runtime": 1951.744,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "27a13326-3bf0-41b4-aab9-e7ddeb138bf7.out",
                        "size": 15492
                    },
                    {
                        "link": "output",
                        "name": "3190d243-afce-4537-8c93-996919ced1db.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "66d64eb6-f2d7-41f6-b06c-a074007c1899blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "bcd7c56f-6049-4ba4-bde0-0c2528541726nt",
                        "size": 3373054302
                    },
                    {
                        "link": "input",
                        "name": "116578dc-4ee8-4c69-bb5a-bf9c801ae0acblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "7019c9c1-ce80-4563-b4a4-251e3ba7367fnt",
                        "size": 511770449
                    }
                ],
                "cores": 1,
                "id": "00000033",
                "category": "blastall"
            },
            {
                "name": "blastall_00000034",
                "type": "compute",
                "runtime": 1631.935,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "3795ad03-bafe-4af5-8f97-210135dc0811.out",
                        "size": 6134
                    },
                    {
                        "link": "output",
                        "name": "3e35b559-ffb0-4d26-bbd5-86a848915f27.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "30e31906-deba-43cb-82e9-2fe784a32fc6blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "94da8c21-ba6f-4c3d-8b66-5c9eb41f9cf1nt",
                        "size": 2535035841
                    },
                    {
                        "link": "input",
                        "name": "1c2903cc-b792-4b28-97e6-198a18297acfblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "b49787d8-f9cc-4fb8-9cea-09376eeb6bcdnt",
                        "size": 5142251415
                    }
                ],
                "cores": 1,
                "id": "00000034",
                "category": "blastall"
            },
            {
                "name": "blastall_00000035",
                "type": "compute",
                "runtime": 865.113,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "db991657-9e94-4d8b-a09c-1611656031ab.out",
                        "size": 12868
                    },
                    {
                        "link": "output",
                        "name": "7f523b9b-0500-4bf1-8947-f20d1106f527.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "e4671fda-74fe-4dc8-8be0-d393999a6e4bblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "f4b0f609-49c6-49ed-a8c8-aefcdf23d81cnt",
                        "size": 4024125122
                    },
                    {
                        "link": "input",
                        "name": "ddabe5b1-ed80-4eb6-a37e-db87e8055766blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "ff4af4f9-0064-4ca3-bdce-060cc95a94bdnt",
                        "size": 3112109605
                    }
                ],
                "cores": 1,
                "id": "00000035",
                "category": "blastall"
            },
            {
                "name": "blastall_00000036",
                "type": "compute",
                "runtime": 1543.835,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "7d353a59-b05b-4646-a3ed-11870e300e5a.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "97406302-69fb-4359-a364-b69603dc2e05.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "90f2c6ca-3edc-4288-92ee-3d676afb5546blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "360e5c1c-2e4a-4f5a-a051-2c8cc22ec1a7nt",
                        "size": 1047892437
                    },
                    {
                        "link": "input",
                        "name": "085f6508-7554-4b84-9030-ccacbf63e9d7blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "1a1bc461-0faf-4f5d-88ea-d27657ab72bbnt",
                        "size": 944856088
                    }
                ],
                "cores": 1,
                "id": "00000036",
                "category": "blastall"
            },
            {
                "name": "blastall_00000037",
                "type": "compute",
                "runtime": 1919.671,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "94d327bd-5bfe-48e7-bac1-4c10d78f1815.out",
                        "size": 10048
                    },
                    {
                        "link": "output",
                        "name": "53b1cfb4-06fb-45ae-b7ef-3a7d31ece6b0.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "bda55147-7ca9-45bd-8c48-51f1e5c22c08blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "039e7e03-f10f-45b4-89c5-8d1363099fbent",
                        "size": 1506628177
                    },
                    {
                        "link": "input",
                        "name": "fd50886b-b8af-4cb4-9db5-8e990f6d2587blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "953fea4d-8993-4cdd-8e71-bc4bd0b38f46nt",
                        "size": 2114630909
                    }
                ],
                "cores": 1,
                "id": "00000037",
                "category": "blastall"
            },
            {
                "name": "blastall_00000038",
                "type": "compute",
                "runtime": 195.645,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "455af053-f079-4e51-9492-c99164ccd62a.out",
                        "size": 3780
                    },
                    {
                        "link": "output",
                        "name": "afca9a8f-c13e-4831-ac67-7c076c8f095b.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "eb7d3868-0646-48af-813b-65fa4948cff7blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "c06ce306-8701-4af5-8a48-1974c28672f9nt",
                        "size": 4654288617
                    },
                    {
                        "link": "input",
                        "name": "095b5288-9cca-4dc2-a94f-eec4bfa29340blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "a6ad779c-e09d-4bbc-803a-f30382a34501nt",
                        "size": 3518164897
                    }
                ],
                "cores": 1,
                "id": "00000038",
                "category": "blastall"
            },
            {
                "name": "blastall_00000039",
                "type": "compute",
                "runtime": 179.956,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "6a71c8eb-8fe1-414e-a50a-2e6cd9e3d01a.out",
                        "size": 2628
                    },
                    {
                        "link": "output",
                        "name": "9f1afec8-a244-4798-96ac-33e21a317079.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "4166feb7-9766-4d65-858a-5732984a66ecblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "febb9d42-d0c2-4760-a646-156873d444a4nt",
                        "size": 3525738714
                    },
                    {
                        "link": "input",
                        "name": "624661af-6557-44a8-97a1-23f77f6dd19cblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "05dcbe34-7837-4151-ad8c-7c3ebc864974nt",
                        "size": 4135459778
                    }
                ],
                "cores": 1,
                "id": "00000039",
                "category": "blastall"
            },
            {
                "name": "blastall_00000040",
                "type": "compute",
                "runtime": 1278.161,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "ec410baf-f4ae-4f29-a33b-5145a9596652.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "97e19d1e-8801-4125-9a35-38c77136e514.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "d4642bd0-21e5-4a6c-9fd1-503b1191c8f3blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "6df62dea-e14d-4f89-ae1c-a666748ad2c3nt",
                        "size": 4793702469
                    },
                    {
                        "link": "input",
                        "name": "91514d78-f2b4-473b-8c0b-8a8543b6232bblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "140eca5f-358c-4da6-999f-3dbf7b9cec28nt",
                        "size": 4757971216
                    }
                ],
                "cores": 1,
                "id": "00000040",
                "category": "blastall"
            },
            {
                "name": "blastall_00000041",
                "type": "compute",
                "runtime": 950.413,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "970f8163-dd5e-4715-874e-b5399a422d1d.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "82740a34-1a7d-42e7-abd9-fc45a85e70c3.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "24609888-16c3-41fe-b9d8-7548a03426acblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "fc37ad96-1ccb-4516-a882-6519d436cde7nt",
                        "size": 5074788215
                    },
                    {
                        "link": "input",
                        "name": "f1b4507d-861a-4cf4-bc1f-83be01927f18blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "4bdbd06c-0f5d-41b3-8d45-63d80f3e30b1nt",
                        "size": 3855603944
                    }
                ],
                "cores": 1,
                "id": "00000041",
                "category": "blastall"
            },
            {
                "name": "cat_blast_00000042",
                "type": "compute",
                "runtime": 1.742,
                "command": {
                    "program": "cat_blast"
                },
                "parents": [
                    "blastall_00000002",
                    "blastall_00000003",
                    "blastall_00000004",
                    "blastall_00000005",
                    "blastall_00000006",
                    "blastall_00000007",
                    "blastall_00000008",
                    "blastall_00000009",
                    "blastall_00000010",
                    "blastall_00000011",
                    "blastall_00000012",
                    "blastall_00000013",
                    "blastall_00000014",
                    "blastall_00000015",
                    "blastall_00000016",
                    "blastall_00000017",
                    "blastall_00000018",
                    "blastall_00000019",
                    "blastall_00000020",
                    "blastall_00000021",
                    "blastall_00000022",
                    "blastall_00000023",
                    "blastall_00000024",
                    "blastall_00000025",
                    "blastall_00000026",
                    "blastall_00000027",
                    "blastall_00000028",
                    "blastall_00000029",
                    "blastall_00000030",
                    "blastall_00000031",
                    "blastall_00000032",
                    "blastall_00000033",
                    "blastall_00000034",
                    "blastall_00000035",
                    "blastall_00000036",
                    "blastall_00000037",
                    "blastall_00000038",
                    "blastall_00000039",
                    "blastall_00000040",
                    "blastall_00000041",
                    "blastall_00000044",
                    "blastall_00000045",
                    "blastall_00000046",
                    "blastall_00000047",
                    "blastall_00000048"
                ],
                "children": [],
                "files": [
                    {
                        "link": "output",
                        "name": "e2a5b0e3-5eed-45c6-a2bf-7a67696a4a55None",
                        "size": 56594
                    },
                    {
                        "link": "input",
                        "name": "35c34ecf-3e5c-447d-9464-3de38379bf6d.out",
                        "size": 5180
                    },
                    {
                        "link": "input",
                        "name": "9fceab1b-806b-4d92-8891-ba4ab4b2afb7.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "11e47061-0f1d-41d8-96e3-3f87de53da7a.out",
                        "size": 16767
                    },
                    {
                        "link": "input",
                        "name": "37d80586-4593-4191-8b32-c658d0faa82c.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "fb7a4a39-269c-4fbc-ae92-418ac632cba7.out",
                        "size": 16293
                    },
                    {
                        "link": "input",
                        "name": "7d3dd3e9-c5a0-4231-8114-4b13cc47d7b2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "58c5f0af-a01a-4162-a07d-abe13d40f409.out",
                        "size": 2375
                    },
                    {
                        "link": "input",
                        "name": "130aa66f-7770-4e45-b25a-ed9789906f27.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "cb8c0d35-dd35-4874-9869-acbfd56838a4.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "df38638d-1a2b-49de-82e0-d52bb1e63616.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "15517993-7d4a-45d5-b557-b19d2befd5a5.out",
                        "size": 4708
                    },
                    {
                        "link": "input",
                        "name": "b12b6770-885a-4888-ba71-1e92c457fc87.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "47c44b85-f5f8-449c-8373-1c671083e1a6.out",
                        "size": 7572
                    },
                    {
                        "link": "input",
                        "name": "33b14145-fb56-431f-b34f-f3c2f8fadb88.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "b3847398-db73-4501-bca7-a7998c4cd528.out",
                        "size": 16669
                    },
                    {
                        "link": "input",
                        "name": "aebc200a-cf24-4a18-8c87-4cfb3cb41a81.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "573c1fe4-c90b-438d-af98-22800ca509f3.out",
                        "size": 3514
                    },
                    {
                        "link": "input",
                        "name": "dfb6f34e-7161-4f91-8f49-9b534e1e5787.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "436131e4-1a11-4e84-a936-77001ae446df.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "5d9707a0-f750-4def-a230-390757778917.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "7dba3377-454f-4b89-9a8c-4feb17dfac39.out",
                        "size": 13495
                    },
                    {
                        "link": "input",
                        "name": "fb2d6763-3f13-4ba4-92f3-280086b4b180.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "1d1f89c1-946b-44f1-b117-813cfffd1fe5.out",
                        "size": 4354
                    },
                    {
                        "link": "input",
                        "name": "16787de2-6d09-4647-af19-fa0673088759.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "a89da07b-e4da-47a2-851d-929121e78c09.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "abeee7af-afcf-42d3-9f7b-98eda63cdaf2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "a79e153d-0bf5-4f8b-922c-a4e631207f5c.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "9ce6d797-51ce-4f4b-8cf8-6e78a5aad089.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "8008709c-934e-4dd3-aaeb-eac20bf02c50.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "8fff0081-b406-4b57-b644-f004e041a72d.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "075ba1a1-d7e7-447c-abf3-904ab9f6c4e4.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "8c7fcd1a-fc8d-4cc8-8673-4a030349afd5.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "01e5c5a8-4199-4dc9-9bc3-9a68dea88d26.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "364bd161-9a1f-49ee-8fe8-03deae646ca4.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "acbd5670-2bc2-4fed-9486-d0bf65179be6.out",
                        "size": 10446
                    },
                    {
                        "link": "input",
                        "name": "989e751b-5f3e-453a-b24a-c39786da2141.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "8466289e-4432-4b44-98a9-4f28a7573664.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "a9801788-c8e2-4faa-b816-1759c8d85091.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "f2f00d19-af26-42e7-a843-c2cbe7dc2244.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "2d5b9bea-be08-42d4-a46e-ff5d012953e0.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "ed442a7a-99cd-4dc8-8548-a18c622717d6.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "90f994ff-0d5b-4875-972c-213e4f8502b1.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "e330f830-f66c-4d18-a787-9767e2118df5.out",
                        "size": 7211
                    },
                    {
                        "link": "input",
                        "name": "5213510c-2340-4307-b248-cbe7f32caea2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "05c76ed3-58d9-4e05-aed0-a58c5974b5ba.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "c4ceb83f-96ce-4602-a741-af0b1235abdf.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "be65cd8a-b231-4a9a-8096-535caf77933e.out",
                        "size": 2362
                    },
                    {
                        "link": "input",
                        "name": "4443ff57-8ca3-46d3-8078-5e1a590e79ff.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "e7028fd2-e1ed-4b97-a74c-26b5e059b697.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "8fc0e5c9-7b36-471b-bcf9-48cd728e0f03.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "262bc4d7-24fb-46b8-bd50-0be8c7c10e0e.out",
                        "size": 3633
                    },
                    {
                        "link": "input",
                        "name": "13a00e15-52c3-463a-a6d3-8f2d0d8e57e7.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "76f3f459-177a-4d69-9792-6597161a8f29.out",
                        "size": 6898
                    },
                    {
                        "link": "input",
                        "name": "eaf39e76-8db5-401a-a4ab-fac67734448a.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "9cbcf478-2d41-462b-9f81-c8d2c3e8f3ae.out",
                        "size": 3918
                    },
                    {
                        "link": "input",
                        "name": "ad3409a3-e298-436e-ab40-7c770ee3dfe8.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "30d2493e-f957-4379-bb5d-0061e63f4e50.out",
                        "size": 4169
                    },
                    {
                        "link": "input",
                        "name": "7fe274d4-8af5-490f-8b32-7fd86c94bc48.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "036e1d30-f144-467e-a16d-b32d7cdd3f58.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "596bf6c5-56de-41db-a845-a99b55325c73.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c98c12ef-18ce-4a1d-a66f-ea3bb89662c9.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "c80a098f-1638-4e32-85a7-ad28cf25531f.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "27a13326-3bf0-41b4-aab9-e7ddeb138bf7.out",
                        "size": 15492
                    },
                    {
                        "link": "input",
                        "name": "3190d243-afce-4537-8c93-996919ced1db.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "3795ad03-bafe-4af5-8f97-210135dc0811.out",
                        "size": 6134
                    },
                    {
                        "link": "input",
                        "name": "3e35b559-ffb0-4d26-bbd5-86a848915f27.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "db991657-9e94-4d8b-a09c-1611656031ab.out",
                        "size": 12868
                    },
                    {
                        "link": "input",
                        "name": "7f523b9b-0500-4bf1-8947-f20d1106f527.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "7d353a59-b05b-4646-a3ed-11870e300e5a.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "97406302-69fb-4359-a364-b69603dc2e05.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "94d327bd-5bfe-48e7-bac1-4c10d78f1815.out",
                        "size": 10048
                    },
                    {
                        "link": "input",
                        "name": "53b1cfb4-06fb-45ae-b7ef-3a7d31ece6b0.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "455af053-f079-4e51-9492-c99164ccd62a.out",
                        "size": 3780
                    },
                    {
                        "link": "input",
                        "name": "afca9a8f-c13e-4831-ac67-7c076c8f095b.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "6a71c8eb-8fe1-414e-a50a-2e6cd9e3d01a.out",
                        "size": 2628
                    },
                    {
                        "link": "input",
                        "name": "9f1afec8-a244-4798-96ac-33e21a317079.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "ec410baf-f4ae-4f29-a33b-5145a9596652.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "97e19d1e-8801-4125-9a35-38c77136e514.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "970f8163-dd5e-4715-874e-b5399a422d1d.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "82740a34-1a7d-42e7-abd9-fc45a85e70c3.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "218151a7-9389-4f1b-82da-bd1055f89134.out",
                        "size": 7305
                    },
                    {
                        "link": "input",
                        "name": "22630cc0-d8dc-4189-b3a0-789a33d23496.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "e80f1b18-1b0a-4996-b6cf-6f56a08083f6.out",
                        "size": 6870
                    },
                    {
                        "link": "input",
                        "name": "06cfe705-32cc-4c76-bfce-002c51b8486f.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "3b3f4737-868a-4d9c-85ee-66322f87679f.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "6b49f9c7-d421-4d03-a409-e30e1d494c71.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "3a5f50c8-953a-4e0e-bab8-ec66f4d8baca.out",
                        "size": 13850
                    },
                    {
                        "link": "input",
                        "name": "0c294c85-0af6-4f8e-823b-d6b6c6fed712.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "436da547-efb1-4861-9856-50c54b477e7a.out",
                        "size": 7872
                    },
                    {
                        "link": "input",
                        "name": "bf6f26f2-eca6-4a58-b1f7-c5ca5b2d13a6.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "d17a2576-d492-4da0-9d50-6522f830d203cat_blast",
                        "size": 1
                    }
                ],
                "cores": 1,
                "id": "00000042",
                "category": "cat_blast"
            },
            {
                "name": "cat_00000043",
                "type": "compute",
                "runtime": 0.02,
                "command": {
                    "program": "cat"
                },
                "parents": [
                    "blastall_00000002",
                    "blastall_00000003",
                    "blastall_00000004",
                    "blastall_00000005",
                    "blastall_00000006",
                    "blastall_00000007",
                    "blastall_00000008",
                    "blastall_00000009",
                    "blastall_00000010",
                    "blastall_00000011",
                    "blastall_00000012",
                    "blastall_00000013",
                    "blastall_00000014",
                    "blastall_00000015",
                    "blastall_00000016",
                    "blastall_00000017",
                    "blastall_00000018",
                    "blastall_00000019",
                    "blastall_00000020",
                    "blastall_00000021",
                    "blastall_00000022",
                    "blastall_00000023",
                    "blastall_00000024",
                    "blastall_00000025",
                    "blastall_00000026",
                    "blastall_00000027",
                    "blastall_00000028",
                    "blastall_00000029",
                    "blastall_00000030",
                    "blastall_00000031",
                    "blastall_00000032",
                    "blastall_00000033",
                    "blastall_00000034",
                    "blastall_00000035",
                    "blastall_00000036",
                    "blastall_00000037",
                    "blastall_00000038",
                    "blastall_00000039",
                    "blastall_00000040",
                    "blastall_00000041",
                    "blastall_00000044",
                    "blastall_00000045",
                    "blastall_00000046",
                    "blastall_00000047",
                    "blastall_00000048"
                ],
                "children": [],
                "files": [
                    {
                        "link": "output",
                        "name": "cee69e40-ba20-4c96-ab56-0f45687904eb.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "35c34ecf-3e5c-447d-9464-3de38379bf6d.out",
                        "size": 5180
                    },
                    {
                        "link": "input",
                        "name": "9fceab1b-806b-4d92-8891-ba4ab4b2afb7.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "11e47061-0f1d-41d8-96e3-3f87de53da7a.out",
                        "size": 16767
                    },
                    {
                        "link": "input",
                        "name": "37d80586-4593-4191-8b32-c658d0faa82c.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "fb7a4a39-269c-4fbc-ae92-418ac632cba7.out",
                        "size": 16293
                    },
                    {
                        "link": "input",
                        "name": "7d3dd3e9-c5a0-4231-8114-4b13cc47d7b2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "58c5f0af-a01a-4162-a07d-abe13d40f409.out",
                        "size": 2375
                    },
                    {
                        "link": "input",
                        "name": "130aa66f-7770-4e45-b25a-ed9789906f27.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "cb8c0d35-dd35-4874-9869-acbfd56838a4.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "df38638d-1a2b-49de-82e0-d52bb1e63616.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "15517993-7d4a-45d5-b557-b19d2befd5a5.out",
                        "size": 4708
                    },
                    {
                        "link": "input",
                        "name": "b12b6770-885a-4888-ba71-1e92c457fc87.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "47c44b85-f5f8-449c-8373-1c671083e1a6.out",
                        "size": 7572
                    },
                    {
                        "link": "input",
                        "name": "33b14145-fb56-431f-b34f-f3c2f8fadb88.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "b3847398-db73-4501-bca7-a7998c4cd528.out",
                        "size": 16669
                    },
                    {
                        "link": "input",
                        "name": "aebc200a-cf24-4a18-8c87-4cfb3cb41a81.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "573c1fe4-c90b-438d-af98-22800ca509f3.out",
                        "size": 3514
                    },
                    {
                        "link": "input",
                        "name": "dfb6f34e-7161-4f91-8f49-9b534e1e5787.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "436131e4-1a11-4e84-a936-77001ae446df.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "5d9707a0-f750-4def-a230-390757778917.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "7dba3377-454f-4b89-9a8c-4feb17dfac39.out",
                        "size": 13495
                    },
                    {
                        "link": "input",
                        "name": "fb2d6763-3f13-4ba4-92f3-280086b4b180.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "1d1f89c1-946b-44f1-b117-813cfffd1fe5.out",
                        "size": 4354
                    },
                    {
                        "link": "input",
                        "name": "16787de2-6d09-4647-af19-fa0673088759.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "a89da07b-e4da-47a2-851d-929121e78c09.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "abeee7af-afcf-42d3-9f7b-98eda63cdaf2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "a79e153d-0bf5-4f8b-922c-a4e631207f5c.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "9ce6d797-51ce-4f4b-8cf8-6e78a5aad089.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "8008709c-934e-4dd3-aaeb-eac20bf02c50.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "8fff0081-b406-4b57-b644-f004e041a72d.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "075ba1a1-d7e7-447c-abf3-904ab9f6c4e4.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "8c7fcd1a-fc8d-4cc8-8673-4a030349afd5.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "01e5c5a8-4199-4dc9-9bc3-9a68dea88d26.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "364bd161-9a1f-49ee-8fe8-03deae646ca4.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "acbd5670-2bc2-4fed-9486-d0bf65179be6.out",
                        "size": 10446
                    },
                    {
                        "link": "input",
                        "name": "989e751b-5f3e-453a-b24a-c39786da2141.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "8466289e-4432-4b44-98a9-4f28a7573664.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "a9801788-c8e2-4faa-b816-1759c8d85091.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "f2f00d19-af26-42e7-a843-c2cbe7dc2244.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "2d5b9bea-be08-42d4-a46e-ff5d012953e0.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "ed442a7a-99cd-4dc8-8548-a18c622717d6.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "90f994ff-0d5b-4875-972c-213e4f8502b1.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "e330f830-f66c-4d18-a787-9767e2118df5.out",
                        "size": 7211
                    },
                    {
                        "link": "input",
                        "name": "5213510c-2340-4307-b248-cbe7f32caea2.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "05c76ed3-58d9-4e05-aed0-a58c5974b5ba.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "c4ceb83f-96ce-4602-a741-af0b1235abdf.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "be65cd8a-b231-4a9a-8096-535caf77933e.out",
                        "size": 2362
                    },
                    {
                        "link": "input",
                        "name": "4443ff57-8ca3-46d3-8078-5e1a590e79ff.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "e7028fd2-e1ed-4b97-a74c-26b5e059b697.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "8fc0e5c9-7b36-471b-bcf9-48cd728e0f03.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "262bc4d7-24fb-46b8-bd50-0be8c7c10e0e.out",
                        "size": 3633
                    },
                    {
                        "link": "input",
                        "name": "13a00e15-52c3-463a-a6d3-8f2d0d8e57e7.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "76f3f459-177a-4d69-9792-6597161a8f29.out",
                        "size": 6898
                    },
                    {
                        "link": "input",
                        "name": "eaf39e76-8db5-401a-a4ab-fac67734448a.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "9cbcf478-2d41-462b-9f81-c8d2c3e8f3ae.out",
                        "size": 3918
                    },
                    {
                        "link": "input",
                        "name": "ad3409a3-e298-436e-ab40-7c770ee3dfe8.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "30d2493e-f957-4379-bb5d-0061e63f4e50.out",
                        "size": 4169
                    },
                    {
                        "link": "input",
                        "name": "7fe274d4-8af5-490f-8b32-7fd86c94bc48.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "036e1d30-f144-467e-a16d-b32d7cdd3f58.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "596bf6c5-56de-41db-a845-a99b55325c73.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c98c12ef-18ce-4a1d-a66f-ea3bb89662c9.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "c80a098f-1638-4e32-85a7-ad28cf25531f.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "27a13326-3bf0-41b4-aab9-e7ddeb138bf7.out",
                        "size": 15492
                    },
                    {
                        "link": "input",
                        "name": "3190d243-afce-4537-8c93-996919ced1db.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "3795ad03-bafe-4af5-8f97-210135dc0811.out",
                        "size": 6134
                    },
                    {
                        "link": "input",
                        "name": "3e35b559-ffb0-4d26-bbd5-86a848915f27.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "db991657-9e94-4d8b-a09c-1611656031ab.out",
                        "size": 12868
                    },
                    {
                        "link": "input",
                        "name": "7f523b9b-0500-4bf1-8947-f20d1106f527.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "7d353a59-b05b-4646-a3ed-11870e300e5a.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "97406302-69fb-4359-a364-b69603dc2e05.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "94d327bd-5bfe-48e7-bac1-4c10d78f1815.out",
                        "size": 10048
                    },
                    {
                        "link": "input",
                        "name": "53b1cfb4-06fb-45ae-b7ef-3a7d31ece6b0.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "455af053-f079-4e51-9492-c99164ccd62a.out",
                        "size": 3780
                    },
                    {
                        "link": "input",
                        "name": "afca9a8f-c13e-4831-ac67-7c076c8f095b.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "6a71c8eb-8fe1-414e-a50a-2e6cd9e3d01a.out",
                        "size": 2628
                    },
                    {
                        "link": "input",
                        "name": "9f1afec8-a244-4798-96ac-33e21a317079.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "ec410baf-f4ae-4f29-a33b-5145a9596652.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "97e19d1e-8801-4125-9a35-38c77136e514.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "970f8163-dd5e-4715-874e-b5399a422d1d.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "82740a34-1a7d-42e7-abd9-fc45a85e70c3.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "218151a7-9389-4f1b-82da-bd1055f89134.out",
                        "size": 7305
                    },
                    {
                        "link": "input",
                        "name": "22630cc0-d8dc-4189-b3a0-789a33d23496.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "e80f1b18-1b0a-4996-b6cf-6f56a08083f6.out",
                        "size": 6870
                    },
                    {
                        "link": "input",
                        "name": "06cfe705-32cc-4c76-bfce-002c51b8486f.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "3b3f4737-868a-4d9c-85ee-66322f87679f.out",
                        "size": 1795
                    },
                    {
                        "link": "input",
                        "name": "6b49f9c7-d421-4d03-a409-e30e1d494c71.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "3a5f50c8-953a-4e0e-bab8-ec66f4d8baca.out",
                        "size": 13850
                    },
                    {
                        "link": "input",
                        "name": "0c294c85-0af6-4f8e-823b-d6b6c6fed712.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "436da547-efb1-4861-9856-50c54b477e7a.out",
                        "size": 7872
                    },
                    {
                        "link": "input",
                        "name": "bf6f26f2-eca6-4a58-b1f7-c5ca5b2d13a6.err",
                        "size": 0
                    }
                ],
                "cores": 1,
                "id": "00000043",
                "category": "cat"
            },
            {
                "name": "blastall_00000044",
                "type": "compute",
                "runtime": 1835.864,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "218151a7-9389-4f1b-82da-bd1055f89134.out",
                        "size": 7305
                    },
                    {
                        "link": "output",
                        "name": "22630cc0-d8dc-4189-b3a0-789a33d23496.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "e344253e-0581-47f0-9463-94aeba34414bblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "e866cd88-8214-444b-9029-66c59d397286nt",
                        "size": 4150408532
                    },
                    {
                        "link": "input",
                        "name": "d668f6a6-69f0-4f9e-95d5-5767f2dc630fblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "94aaac23-e5f9-4e01-b798-ecc681cd3623nt",
                        "size": 3756317989
                    }
                ],
                "cores": 1,
                "id": "00000044",
                "category": "blastall"
            },
            {
                "name": "blastall_00000045",
                "type": "compute",
                "runtime": 179.956,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "e80f1b18-1b0a-4996-b6cf-6f56a08083f6.out",
                        "size": 6870
                    },
                    {
                        "link": "output",
                        "name": "06cfe705-32cc-4c76-bfce-002c51b8486f.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "64f1f5ae-1473-4741-9eea-8f77da7d7d54blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "0326d9e9-96b9-4738-a960-514520eb4912nt",
                        "size": 4819197368
                    },
                    {
                        "link": "input",
                        "name": "eb063937-5bd7-4e58-b43d-50f64216a4d2blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "84c4c2ac-3b24-46d6-bdd0-5a4738745b6fnt",
                        "size": 5435310117
                    }
                ],
                "cores": 1,
                "id": "00000045",
                "category": "blastall"
            },
            {
                "name": "blastall_00000046",
                "type": "compute",
                "runtime": 920.13,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "3b3f4737-868a-4d9c-85ee-66322f87679f.out",
                        "size": 1795
                    },
                    {
                        "link": "output",
                        "name": "6b49f9c7-d421-4d03-a409-e30e1d494c71.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "8d9cbb5b-3b94-4944-ae32-b47b7ef1a399blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "8eed6e5b-bed0-4a34-b8f1-bef218c7de1bnt",
                        "size": 3381665429
                    },
                    {
                        "link": "input",
                        "name": "faa77dae-ce44-445b-b48d-dea1060b595dblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "8b0057e1-5d98-48f2-8d1b-a283cfe9d713nt",
                        "size": 5370480534
                    }
                ],
                "cores": 1,
                "id": "00000046",
                "category": "blastall"
            },
            {
                "name": "blastall_00000047",
                "type": "compute",
                "runtime": 1525.292,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "3a5f50c8-953a-4e0e-bab8-ec66f4d8baca.out",
                        "size": 13850
                    },
                    {
                        "link": "output",
                        "name": "0c294c85-0af6-4f8e-823b-d6b6c6fed712.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "d37fd2a5-7acb-4471-afdd-6eb8cbd7c5c6blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "878bd40b-a8be-42b0-b618-6f04cbb581bbnt",
                        "size": 565381465
                    },
                    {
                        "link": "input",
                        "name": "38ae2ef4-5e3a-4d7e-85c5-2adfdabc0c6dblastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "ac066959-527b-4639-96c6-26e245261e0fnt",
                        "size": 4799629832
                    }
                ],
                "cores": 1,
                "id": "00000047",
                "category": "blastall"
            },
            {
                "name": "blastall_00000048",
                "type": "compute",
                "runtime": 179.956,
                "command": {
                    "program": "blastall"
                },
                "parents": [
                    "split_fasta_00000001"
                ],
                "children": [
                    "cat_blast_00000042",
                    "cat_00000043"
                ],
                "files": [
                    {
                        "link": "output",
                        "name": "436da547-efb1-4861-9856-50c54b477e7a.out",
                        "size": 7872
                    },
                    {
                        "link": "output",
                        "name": "bf6f26f2-eca6-4a58-b1f7-c5ca5b2d13a6.err",
                        "size": 0
                    },
                    {
                        "link": "input",
                        "name": "c3112bc8-5e3f-4b8e-8576-7bde2a476079.fasta",
                        "size": 2186
                    },
                    {
                        "link": "input",
                        "name": "d6e121e3-08e4-4c89-acf9-ed3fa56452a6blastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "7923093d-6a7a-4e59-aa36-47670681c7a9nt",
                        "size": 4391482401
                    },
                    {
                        "link": "input",
                        "name": "ac27fb08-2b86-48da-aacf-fd83f95ccc0ablastall",
                        "size": 7688
                    },
                    {
                        "link": "input",
                        "name": "b3a453d1-9db6-45e3-8f66-292af584ad26nt",
                        "size": 1882046847
                    }
                ],
                "cores": 1,
                "id": "00000048",
                "category": "blastall"
            }
        ],
        "machines": []
    }
}