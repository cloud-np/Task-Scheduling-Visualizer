export default {
    "name": "SoyKB-synthetic-trace",
    "description": "Trace generated with WorkflowHub - https://workflowhub.org",
    "createdAt": "2021-02-16T11:55:37.985483",
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
                "name": "alignment_to_reference_00000001",
                "type": "compute",
                "runtime": 63.306,
                "parents": [],
                "children": [
                    "sort_sam_00000002"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "28d86d31-6ed6-43b7-a028-0005ef18669e.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "2cbf7066-ac5c-4328-b670-84dc6a81a139.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "e7d1d71a-aa3b-4b50-8f34-640a99193483.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "cc05ea47-97fd-4dcd-8cac-49cea700a025.fastq",
                        "size": 23845
                    },
                    {
                        "link": "input",
                        "name": "dd590b55-09ae-4638-8077-d35b0f52c0ec.fastq",
                        "size": 23845
                    },
                    {
                        "link": "input",
                        "name": "c946c24a-f95c-481d-9ee2-050425b44fc3.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "78f85fa2-413a-4f68-b859-6f94a7cdf271.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "985a4654-85a6-4b5e-b681-75ca3cc235c7.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "2e963bf7-6b98-4107-bf74-743235606c1d.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "20d07665-6738-489a-8978-6b95229fa275.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "b093fecf-dfcc-4062-b8e2-565a65523b87.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "2c6940c4-0c99-4b79-bac1-3d16fb7e3ff8.txt",
                        "size": 15976
                    },
                    {
                        "link": "output",
                        "name": "92d4d89d-cc81-4412-b4e8-7280bdc53057.sam",
                        "size": 112561
                    }
                ],
                "cores": 1
            },
            {
                "name": "sort_sam_00000002",
                "type": "compute",
                "runtime": 87.102,
                "parents": [
                    "alignment_to_reference_00000001"
                ],
                "children": [
                    "dedup_00000003"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "92d4d89d-cc81-4412-b4e8-7280bdc53057.sam",
                        "size": 112561
                    },
                    {
                        "link": "input",
                        "name": "eab841ed-39ea-4d17-900e-564233912f1c.gz",
                        "size": 108988506
                    },
                    {
                        "link": "output",
                        "name": "384ca7d5-c2df-4e06-bed2-b7e912f1a8d9.bai",
                        "size": 127424
                    },
                    {
                        "link": "output",
                        "name": "836d38c9-485c-4247-96f1-4dd7cf5a0af2.bam",
                        "size": 36576
                    }
                ],
                "cores": 1
            },
            {
                "name": "dedup_00000003",
                "type": "compute",
                "runtime": 49.925,
                "parents": [
                    "sort_sam_00000002"
                ],
                "children": [
                    "add_replace_00000004"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "384ca7d5-c2df-4e06-bed2-b7e912f1a8d9.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "836d38c9-485c-4247-96f1-4dd7cf5a0af2.bam",
                        "size": 36576
                    },
                    {
                        "link": "input",
                        "name": "991fca79-b6e1-4c38-bd75-aee06f7e378e.gz",
                        "size": 108988506
                    },
                    {
                        "link": "output",
                        "name": "16be9333-5cc8-49e0-b503-7d0fe08a265d.bai",
                        "size": 127424
                    },
                    {
                        "link": "output",
                        "name": "91861b90-dd42-49c2-864b-3d0ca2c9024c.bam",
                        "size": 37469
                    }
                ],
                "cores": 1
            },
            {
                "name": "add_replace_00000004",
                "type": "compute",
                "runtime": 139.438,
                "parents": [
                    "dedup_00000003"
                ],
                "children": [
                    "realign_target_creator_00000005"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "16be9333-5cc8-49e0-b503-7d0fe08a265d.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "91861b90-dd42-49c2-864b-3d0ca2c9024c.bam",
                        "size": 37469
                    },
                    {
                        "link": "input",
                        "name": "6f2c6fe9-88e6-451e-80bc-b063d93c1d16.gz",
                        "size": 108988506
                    },
                    {
                        "link": "output",
                        "name": "768b0127-dea8-4199-a111-f9eb228c4a53.bam",
                        "size": 3795
                    },
                    {
                        "link": "output",
                        "name": "166ca630-51f9-4805-8e73-f39911813511.bai",
                        "size": 127424
                    }
                ],
                "cores": 1
            },
            {
                "name": "realign_target_creator_00000005",
                "type": "compute",
                "runtime": 47.455,
                "parents": [
                    "add_replace_00000004"
                ],
                "children": [
                    "indel_realign_00000006"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "768b0127-dea8-4199-a111-f9eb228c4a53.bam",
                        "size": 3795
                    },
                    {
                        "link": "input",
                        "name": "166ca630-51f9-4805-8e73-f39911813511.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "25f6e143-ae94-4856-8255-a11bc8d0ffea.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "31947efc-1dab-4367-b524-16f90a552fe5.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "7c9d26d8-6e57-4ab1-b1ea-83a7fb5ec10c.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "986cfc90-c189-4c87-8fc4-103f82eeb97b.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "83016829-07eb-46bc-82c7-795307249bd8.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "6ecd01d0-e8ab-446e-8e50-16696bb4728e.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "eb636553-aa28-4b10-b6d4-a1d41390af64.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "adf4e93b-0a4f-4c39-8f1b-cfcd834ac2d9.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "84c5fd9d-ff3e-49c7-a3d4-23096fe3eac9.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "fadb457e-bc00-4b38-b8bc-e50767f8a2c6.txt",
                        "size": 15976
                    },
                    {
                        "link": "output",
                        "name": "29c07695-d4b6-4bec-a140-c58b61655ce2.list",
                        "size": 40
                    }
                ],
                "cores": 1
            },
            {
                "name": "indel_realign_00000006",
                "type": "compute",
                "runtime": 228.953,
                "parents": [
                    "realign_target_creator_00000005"
                ],
                "children": [
                    "haplotype_caller_00000007",
                    "haplotype_caller_00000008",
                    "haplotype_caller_00000009",
                    "haplotype_caller_00000010",
                    "haplotype_caller_00000011",
                    "haplotype_caller_00000012",
                    "haplotype_caller_00000013",
                    "haplotype_caller_00000014",
                    "haplotype_caller_00000015",
                    "haplotype_caller_00000016",
                    "haplotype_caller_00000017",
                    "haplotype_caller_00000018"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "29c07695-d4b6-4bec-a140-c58b61655ce2.list",
                        "size": 40
                    },
                    {
                        "link": "input",
                        "name": "49c11e56-1fb8-4904-a238-20f7b7808f3c.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "d27e1002-70dc-42fd-ab6e-3b4f0a6b17b4.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "7e322598-4a0a-4259-ae74-22fb3eafb032.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "da08c6db-eaa8-46ae-92ae-3a54c9207ed8.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "84abb89b-8846-4d64-a16f-f43206bfbe6a.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "25830db2-4f1b-4b59-9f04-4c0440f4b428.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "19562152-0491-4d8a-9997-c56a725f365f.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "533c3f91-f59e-4457-941d-1e5638ea06e6.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "549d74a8-f430-4379-987c-40e0c116bc6b.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "378dc622-207e-43b9-8965-563c311f3361.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "b90a0e0e-c927-4cf4-9c4c-20962ad6bfe5.bam",
                        "size": 3795
                    },
                    {
                        "link": "input",
                        "name": "41615fcb-962a-447f-94e1-bdc622b5196a.txt",
                        "size": 15976
                    },
                    {
                        "link": "output",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "output",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000007",
                "type": "compute",
                "runtime": 351.911,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000019",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "a14cae90-ebbd-4f4b-ad02-40a9d302dd98.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "33cdc617-3ea2-4742-934c-6be6b8180f0a.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "d8c34535-3b01-4a09-8b72-3a755f592ec4.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "1cc3948c-26de-4580-bf79-933d3321c734.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "eb4a9c1a-99a7-4816-bf8c-552169934b50.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "083cc682-a521-455f-b27a-221ad4316259.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "ff2cad0a-fb41-4baf-a557-131993e1cecb.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "ae2aa457-54bc-4c95-aad8-dc1c7ae79965.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "2dad455c-f99b-4cee-a800-9dfc1e2f9d91.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "8fb0c3dc-918e-4600-9659-eebc46fd06b2.txt",
                        "size": 8776
                    },
                    {
                        "link": "output",
                        "name": "0ff2ab5c-a565-46f8-859e-198b749fb32d.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "3f66fb18-3c20-466a-bc75-e6a921782e1a.idx",
                        "size": 26170
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000008",
                "type": "compute",
                "runtime": 520.047,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000020",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "78d3938b-d951-4b10-a4e1-c31e05b6b5a5.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "7e346bd8-6272-4900-bdda-7ec4e9b99707.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "3721e044-2da4-4f50-ae5e-6174ac119560.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "20e853c4-9553-4ca0-89f7-6087b5458a52.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "886d165f-c534-4d6d-9e35-758fccf116e3.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "b7e68c7d-1f94-4a2f-a0aa-9ff44779f4a2.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "ed23713b-3464-4965-90c1-175b69e1c47a.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "0d71e091-d857-4c0d-a330-3b244a37fe9f.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "cef9d854-a04c-496e-9365-5f26e538e0cf.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "c7f8afbb-742d-429f-9fe1-070f3ea2f8fc.txt",
                        "size": 12302
                    },
                    {
                        "link": "output",
                        "name": "69bffa98-3393-4380-b74b-0b6bd2ebaa97.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "7a2289cc-2889-464b-a6a1-04b964d06974.idx",
                        "size": 19742
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000009",
                "type": "compute",
                "runtime": 86.138,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000021",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "d433158f-7f32-417d-8ed4-b1c911885ce8.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "93659730-2ac4-4553-8b51-1e892ee42815.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "483306b0-de20-4116-ba70-078e73c150ca.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "67818ee4-eb51-4629-9872-312bbb8848cc.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "f8829239-a526-41be-9539-af5691a1504d.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "dec51189-ef44-4126-8a5c-8cf6bfb6e3dc.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "f8a4b515-ea41-4297-b343-d43cb4cd61ae.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "10d27696-25ad-4afc-bf83-c593a4a21d41.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "62d9bcca-b696-4597-81d9-64da99a33417.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "c18e0696-f0c7-4ffb-96ea-0df36622d56d.txt",
                        "size": 5540
                    },
                    {
                        "link": "output",
                        "name": "f4a0ce41-ddab-4b4a-86be-f7aeb3141cf6.vcf",
                        "size": 75728
                    },
                    {
                        "link": "output",
                        "name": "d273b1b8-8927-49b3-b828-19955933bbe3.idx",
                        "size": 29158
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000010",
                "type": "compute",
                "runtime": 416.259,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000022",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "d66518c5-3ec8-446b-836d-25b0c39082d8.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "73a69b8a-fe60-4ec1-b53f-c8594eef4cf8.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "d444300e-b16d-4b37-bd50-6d582299057c.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "20c7e0e6-43e8-4069-ad9c-635403258200.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "fa7aeff4-25c5-48be-87e4-04c253829072.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "3e53d987-1014-4988-b8a5-bde5d3eaa2c6.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "0f7b6116-3fb6-49b4-bfab-17fbc2cb17ef.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "67c5d416-d195-4f05-824e-8e75062d19df.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "2fe16fd4-d9f7-4b14-a091-db9b6e7141af.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "f402f116-a990-43e3-9791-d66994e3aaa8.txt",
                        "size": 13364
                    },
                    {
                        "link": "output",
                        "name": "07378df9-a3b4-47c3-b7ae-2b12e08ebf5f.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "b29893fe-577e-4b49-bfd6-91841bebec34.idx",
                        "size": 9699
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000011",
                "type": "compute",
                "runtime": 259.677,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000023",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "f469d355-5a27-4da2-85cf-d859ed959e92.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "f46bd2c7-052f-4515-8c55-ac016f703e83.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "ac5588b2-1bb3-4c82-8ce0-a9e7ddf782b0.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "68d24c1d-c6c7-481c-8f0a-1c6377c02831.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "34756559-71a9-4959-b494-a4a7b60a35db.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "f25fcebd-8859-4f82-8d74-e0523db5124d.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "c7f2b9d2-24b3-43fa-8bd4-32c7d03f1d97.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "d99d8931-8457-45d5-8d35-b30c359007d4.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "d0732869-5272-4b90-a84e-edfa96f871bd.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "0c507d52-5216-4f52-bb55-d2b85a149c0a.txt",
                        "size": 6428
                    },
                    {
                        "link": "output",
                        "name": "95357302-588d-494a-ad77-819da8051a03.vcf",
                        "size": 75728
                    },
                    {
                        "link": "output",
                        "name": "72f65009-a974-4b32-b56e-b9a62f69e459.idx",
                        "size": 30384
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000012",
                "type": "compute",
                "runtime": 438.714,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000024",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "29965631-41c4-4c3f-b251-43422827f0a7.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "7cf2389e-60a7-4376-b41e-7b73fd31c8e9.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "ac9126f6-9b5f-4db6-b3f0-008fa4d5dbea.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "c970c9fd-03a5-499d-9289-fc55bef86d37.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "2430f6c5-5da3-4b0a-858d-ece69ed6c9f5.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "c4d83ca5-4c93-445d-ac94-f55b5e59f255.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "11f22b6f-d745-4655-9473-3962e01c3282.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "73f3c103-5741-41ce-a757-4230fb818a86.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "0a06fec8-67af-4ee3-a873-620983fa3420.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "18a40cff-d40f-4ddd-96d5-5d2ad5cf127c.txt",
                        "size": 10899
                    },
                    {
                        "link": "output",
                        "name": "e8f8510e-d983-487d-a0ec-18ef23717961.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "1823aa69-e0d8-4bfb-8db9-17e80afa3b4d.idx",
                        "size": 19251
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000013",
                "type": "compute",
                "runtime": 263.287,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000025",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "40e107d6-1562-400f-ba18-204cce212e13.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "90a5e2c7-60b9-4ac2-8b48-b16faa143833.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "d5c3c8c7-7ca4-4a83-915b-27f3a450b6ef.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "cc2e6ac8-8cf3-43f9-90e9-c4a27545d21d.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "d93ba986-b69f-4db6-a08b-bbe104ebe4a4.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "a301c4ee-64ad-40f0-afa4-2b9dabaff966.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "6e283513-730f-4d30-9ff4-2b360f22791f.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "d803a389-9f2a-4be5-9735-1482d175f974.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "07a9eccd-a9b8-421c-a017-ba9c01b22c6a.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "79268619-0877-43d7-9dae-2355708e0ae3.txt",
                        "size": 5213
                    },
                    {
                        "link": "output",
                        "name": "267523bd-0b97-4975-9cc3-afcfa09edeaa.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "cbf005f8-a23e-41c7-b68f-f8e58c589e57.idx",
                        "size": 2844
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000014",
                "type": "compute",
                "runtime": 70.95,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000026",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "396d6d50-730a-4853-bd4e-c694e1fe2627.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "60bd7ed7-a8ae-4629-bbf2-0681e29158bd.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "f304fb5a-7d03-4cf2-a69b-783c934b8c43.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "7904f188-d921-446b-b162-fab811e6b8ba.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "613476d5-c2d5-49f7-96a3-f805c4216b8c.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "318a97c8-cec9-4804-84f8-e120e0d0c90b.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "3278090f-721a-4451-b655-383220310673.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "2c00f47c-ec90-4bbb-803e-48a25bad1477.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "45946261-fc41-4288-a43d-479fdccfc620.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "89fffe33-a0ea-406b-a4cd-f883d7d03d80.txt",
                        "size": 10044
                    },
                    {
                        "link": "output",
                        "name": "1851e3d3-4ff8-4ead-b152-fef1e3d47b00.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "d87e677b-bb6b-4d46-b16a-7567f7ce8967.idx",
                        "size": 8070
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000015",
                "type": "compute",
                "runtime": 70.95,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000027",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "8a36ca9b-9ff5-4214-91d6-cd99f5af3a47.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "b7b8f042-0ce9-45fc-9a54-38b05c9ea22b.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "f6b3ecb0-1c4d-4ab2-bc90-87ef91ca52f6.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "b25b48b4-90f1-4c1f-bb2f-b93b3a792234.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "5bbc3eb8-6cbf-4230-98fb-c74d53c3c754.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "f628b48d-9916-4607-af4b-da8b59ce8689.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "793107be-ee3f-4a47-9873-69015eb37687.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "ec0e8c04-cb45-4a5d-87b6-7095a4fdf416.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "990d1b05-7fa8-4ea4-90b6-7767eac2fc09.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "a29b643a-fbe5-4f5c-ba6d-53b8bd3c6d65.txt",
                        "size": 13336
                    },
                    {
                        "link": "output",
                        "name": "1fc03564-bd5c-4060-a765-a4fd26791f3c.vcf",
                        "size": 75728
                    },
                    {
                        "link": "output",
                        "name": "a0e6894b-499b-4520-ab44-1b922eb04b73.idx",
                        "size": 25050
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000016",
                "type": "compute",
                "runtime": 679.44,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000028",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "64e9dc19-2a93-490b-821a-8cb1cbd08908.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "d104ced3-c646-48e7-97ad-0d837066d084.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "0a0756ab-cc44-419b-b0b1-a5070e48cf4c.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "5bbd3e0e-4bff-4695-9201-3b48ee57ce90.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "a284bc19-a366-4d58-9dbd-24d489983f86.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "68c5f479-9dfb-4c95-80ff-1d27a57fa650.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "c129772f-7e06-4283-ad83-a7054c2a9742.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "2b65e892-e54c-4507-bafc-131a7a2a7f50.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "acd01d1d-7736-4c08-8c2d-851bb539089a.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "51ea32af-1755-4742-b448-798b245f430d.txt",
                        "size": 16590
                    },
                    {
                        "link": "output",
                        "name": "99a11f54-bf8d-4295-9df2-323670e3be7d.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "9ccc743e-252e-400d-a38e-1932a9cffa8b.idx",
                        "size": 2844
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000017",
                "type": "compute",
                "runtime": 574.035,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000029",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "c30dc4b4-9b04-48bf-8993-b82b75624a1d.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "a66577c7-1fd6-4f0c-a19f-f54e551fc1b7.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "0a1f1655-b9eb-4ad9-ad84-4e264500f564.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "5b42c2de-1521-478b-8a4f-753639a9e65c.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "04f4a439-0159-4aae-9782-a586343fd65d.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "d502d972-369f-499d-9ccb-c91e6aa9c98d.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "4184ce04-e37a-4c36-af8b-9f785fc9f936.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "c8caecb2-98ef-4958-aec9-ba0857e942d3.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "95b53415-bc3f-4d24-b04f-d87ed9a61047.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "afa1c64d-2f7a-43ac-ade7-383c5dd6fde0.txt",
                        "size": 1597
                    },
                    {
                        "link": "output",
                        "name": "d0701ca2-ffa4-44c4-b82f-9958cc69b8c0.vcf",
                        "size": 75727
                    },
                    {
                        "link": "output",
                        "name": "ce356a49-94c4-412e-a301-f562a0699eb1.idx",
                        "size": 27749
                    }
                ],
                "cores": 1
            },
            {
                "name": "haplotype_caller_00000018",
                "type": "compute",
                "runtime": 70.95,
                "parents": [
                    "indel_realign_00000006"
                ],
                "children": [
                    "genotype_gvcfs_00000030",
                    "merge_gcvf_00000031"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "36d95d7e-8afa-4394-9111-a4d85b7a4bfe.bai",
                        "size": 127424
                    },
                    {
                        "link": "input",
                        "name": "389a9609-05ae-4145-b19b-e1e9d3048134.bam",
                        "size": 16578
                    },
                    {
                        "link": "input",
                        "name": "e507fd22-635b-43e8-80d9-c1f1d1e38065.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "312ee8ec-86f7-4852-9025-8359ee087d48.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "5e562bc5-e367-41aa-a2e5-27274d833772.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "9ab8a873-a456-438d-acd1-b0ac872336f7.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "778af53c-d01d-40bf-81b5-4ceb4d559fc4.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "f2b95e29-0c59-4919-9803-9302da581e65.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "e2f040f0-12a1-4bb1-9b1a-595283b00e40.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "88f324d0-9e12-4972-9143-8f7b60d7d7cb.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "7cc7ba84-d1fe-4983-b325-5b4a9fad7fc6.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "33cb667d-cb4e-43c3-a0e8-ff6064adcc35.txt",
                        "size": 2305
                    },
                    {
                        "link": "output",
                        "name": "09985040-e599-4070-b702-ac96e10d4fdf.vcf",
                        "size": 75728
                    },
                    {
                        "link": "output",
                        "name": "cdf4f8bc-8b11-40e2-857b-8dd01b4a191e.idx",
                        "size": 20874
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000019",
                "type": "compute",
                "runtime": 261.805,
                "parents": [
                    "haplotype_caller_00000007"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "0ff2ab5c-a565-46f8-859e-198b749fb32d.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "3f66fb18-3c20-466a-bc75-e6a921782e1a.idx",
                        "size": 26170
                    },
                    {
                        "link": "input",
                        "name": "82f0b9e1-dd58-4d43-830c-fbf4c54192eb.txt",
                        "size": 1597
                    },
                    {
                        "link": "input",
                        "name": "972c0eb9-e8fc-4159-bcb7-cc6885a8a5a7.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "9cb3a4bf-aac5-4836-a7d0-8d9855a26e50.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "37f4c62b-48d6-4b64-995d-87889e24000d.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "72e97cc1-9239-4e54-bc8d-50502922ebb7.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "350ee71f-d50a-4305-92ef-ae38894f91be.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "a4be63df-006c-4af1-ac2a-6042689ab6d3.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "7d7cdab7-0d77-4838-93cb-c727dc47cf1c.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "416a8905-d1bc-44c1-a692-d4ff87c431bc.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "92ea1cf2-2b30-41b9-81c8-6ba21e631635.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "2e6bc500-1455-4786-ba5c-b998b47cda23.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "8a0059b2-82e5-41b6-89bc-b50fa38affd0.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000020",
                "type": "compute",
                "runtime": 89.923,
                "parents": [
                    "haplotype_caller_00000008"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "69bffa98-3393-4380-b74b-0b6bd2ebaa97.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "7a2289cc-2889-464b-a6a1-04b964d06974.idx",
                        "size": 19742
                    },
                    {
                        "link": "input",
                        "name": "9c9549c2-d607-443b-b2c4-7495fd955200.txt",
                        "size": 15042
                    },
                    {
                        "link": "input",
                        "name": "8b5c9d35-5cab-4d7e-aee3-f2f42fc3219d.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "bfe3c8b0-0b13-45be-96b9-755508fbeadf.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "4ae86971-4fc1-4ca8-af76-34a989711151.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "0d5077a1-69f8-4573-854d-15f0fc6282ea.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "e880ddd9-599d-42b3-b429-41c8847d7fbf.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "5d8c6013-6b50-454e-a5eb-c19c4cb66b2a.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "bce93376-c3f8-4230-875a-6d639cb94d3a.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "41eb3250-6383-468d-97f5-944c7a5b4880.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "2bbdcaae-411f-4ff6-9503-962d11e79fb7.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "8f24688f-09d8-4e72-b005-ef3079ba9f81.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "cf16d143-103f-40b9-aa5e-88421574d6d4.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000021",
                "type": "compute",
                "runtime": 385.038,
                "parents": [
                    "haplotype_caller_00000009"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "f4a0ce41-ddab-4b4a-86be-f7aeb3141cf6.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "d273b1b8-8927-49b3-b828-19955933bbe3.idx",
                        "size": 29158
                    },
                    {
                        "link": "input",
                        "name": "4b101858-fec3-4a2a-aa5a-d87545a5da10.txt",
                        "size": 15819
                    },
                    {
                        "link": "input",
                        "name": "08f5484f-f183-4d99-b2bc-5c30f808402b.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "161bd652-087a-4a92-937c-83b81956c7b9.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "6a3baa46-24b5-4fc4-9570-94f193846c72.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "7f8ec56e-847f-41f3-a741-b3b4e6e2b82f.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "79a1e7e4-6ac7-4007-a4f5-4876c9944b49.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "5b510fa3-6b67-4b94-915c-59fe6315fa24.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "0bf69bd4-1766-470c-b2b6-dc5627385a2f.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "4b3bf023-e0bf-4f96-8a00-0cec9431683a.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "8027860b-1556-43c6-a2c2-13ad29f987ca.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "204629de-a4d5-4967-9f4d-49b06ce5b19f.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "5f89e97f-e750-431e-9049-4e518586664c.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000022",
                "type": "compute",
                "runtime": 897.782,
                "parents": [
                    "haplotype_caller_00000010"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "07378df9-a3b4-47c3-b7ae-2b12e08ebf5f.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "b29893fe-577e-4b49-bfd6-91841bebec34.idx",
                        "size": 9699
                    },
                    {
                        "link": "input",
                        "name": "226682e7-65a7-4ba2-a224-8919805001fc.txt",
                        "size": 11341
                    },
                    {
                        "link": "input",
                        "name": "bb209417-76ba-472f-9277-d97bfa1876ce.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "65090cc4-5eb8-4312-a491-612192872ee6.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "a3fe0cba-d581-4730-8cdb-d1521d1283bd.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "b97cbd6c-36f0-427e-a6b9-09dc97138701.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "4ce10dda-4d4c-4c69-9a61-656669b73f28.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "49aca6b7-63e2-4c63-b5da-79ddf34d37d6.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "dbbf216e-867f-4e0a-b42e-5ad66b9ce296.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "122a0760-2222-4f12-936c-e0a37683940c.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "a08a2e43-5d87-4bcc-9f2f-b1e864480d4c.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "f96274cf-ded0-4220-a767-c82b9a54a55f.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "8621a87e-63a6-46e0-ba6e-68df4a75f175.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000023",
                "type": "compute",
                "runtime": 276.886,
                "parents": [
                    "haplotype_caller_00000011"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "95357302-588d-494a-ad77-819da8051a03.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "72f65009-a974-4b32-b56e-b9a62f69e459.idx",
                        "size": 30384
                    },
                    {
                        "link": "input",
                        "name": "b5f6c7b4-7ae3-425d-a9e4-9d5a20fa55e2.txt",
                        "size": 13490
                    },
                    {
                        "link": "input",
                        "name": "1250b321-fdd8-414f-9bb2-f7af8f4d3e43.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "fac308d7-3103-4bb8-a1da-d1ac5ee39f84.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "280e0663-4eac-4d80-b7f6-58cb64abbb2b.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "8d8e20c8-6037-4289-bf4d-0ef9f7f3ef9b.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "75d7a76b-3322-4d72-865c-210fdd42cacc.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "229100a2-f258-4495-8dcd-5cc426ad47db.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "8130a7cb-80bc-4690-8692-6c288469d2aa.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "30a97ef1-0ff2-4505-83b8-ab42ce24969e.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "98eb4725-1ef5-4e35-ae82-4964868ca535.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "700e48e2-68e0-44f6-b0f3-7321e66fbbda.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "cb1949d5-5e19-4264-a772-5132274734ac.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000024",
                "type": "compute",
                "runtime": 287.689,
                "parents": [
                    "haplotype_caller_00000012"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "e8f8510e-d983-487d-a0ec-18ef23717961.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "1823aa69-e0d8-4bfb-8db9-17e80afa3b4d.idx",
                        "size": 19251
                    },
                    {
                        "link": "input",
                        "name": "249019ac-e15b-4973-b109-6d3f7cd878f7.txt",
                        "size": 14811
                    },
                    {
                        "link": "input",
                        "name": "4e62193f-e57c-41bf-a46f-184d074efa25.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "78fe343f-9a13-4db0-9eb1-fb30fcc10191.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "2f850d4f-cf56-4029-9733-d889e76901b1.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "88b05876-dfa1-4caf-85a7-acad8a521798.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "1a26eeb8-5dff-4809-9271-36ea8d4598e0.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "6b01af0d-3bb7-42b7-8db1-0b1676feaaac.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "702dab6e-af7a-4053-8e5d-9feda40881fa.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "9e10a8ca-c74e-435d-839f-c33114773606.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "c790b72d-ee21-45e6-8a69-a6dbe0eb4cb0.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "3ae0dbe8-3716-453d-bb0d-203f291d778b.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "835d0737-f97a-4fd6-a305-21c14bf83f94.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000025",
                "type": "compute",
                "runtime": 850.208,
                "parents": [
                    "haplotype_caller_00000013"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "267523bd-0b97-4975-9cc3-afcfa09edeaa.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "cbf005f8-a23e-41c7-b68f-f8e58c589e57.idx",
                        "size": 2844
                    },
                    {
                        "link": "input",
                        "name": "564f83b2-2ed3-4420-bd1e-dac8b5d59baa.txt",
                        "size": 9011
                    },
                    {
                        "link": "input",
                        "name": "7218d753-3e34-4e40-b066-970f086c2ebe.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "8cd6689c-012f-4a36-90db-62aa8051ad33.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "78a90052-223b-49b8-82c5-c108b3f7a053.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "fb763123-7cd3-446a-9fd3-92c5498fb20b.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "e8f47d69-7ea3-4b0f-a985-c37e5e1a5772.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "16f38fa3-c208-40f9-affb-b1a74d01ad72.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "c7fe0bca-7cb2-4bb6-a6e1-548e06f62d1f.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "46cbfedb-4d51-408d-b266-0e9b8dadb56d.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "7420cfb7-e329-49a6-8f7b-967eacbd50cc.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "cdb2807c-c747-4aaa-94ae-cc9b36788937.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "c8fba1de-f238-4bd4-8c9d-253eaa4d6001.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000026",
                "type": "compute",
                "runtime": 773.878,
                "parents": [
                    "haplotype_caller_00000014"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1851e3d3-4ff8-4ead-b152-fef1e3d47b00.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "d87e677b-bb6b-4d46-b16a-7567f7ce8967.idx",
                        "size": 8070
                    },
                    {
                        "link": "input",
                        "name": "6a1d441f-9f97-4148-9cf4-ddde77c57802.txt",
                        "size": 15111
                    },
                    {
                        "link": "input",
                        "name": "d7b98481-d221-47f9-af41-25ee72c2d98e.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "3f275e26-77b8-414c-800b-500777773fa5.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "1745fe2d-1278-4d0f-97df-df730d8f6a07.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "4e8d506d-fdbe-41c9-94c6-91bf5331f49e.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "76001ae6-52cb-471e-9585-f611dd95ffc7.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "3de4255f-3aa8-4bb2-b659-04bb94914ec4.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "292f698b-3f83-498f-96fb-33484410ad7e.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "a1a6d22c-fa17-4583-83f9-ebc0436515cf.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "8f3e65b0-7dad-4f6e-94ed-b703cbb06755.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "e1390b2b-4cd3-4679-9e4a-08bd67b935ee.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "56a22fb9-388c-474f-812c-65f520f1c694.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000027",
                "type": "compute",
                "runtime": 407.818,
                "parents": [
                    "haplotype_caller_00000015"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "1fc03564-bd5c-4060-a765-a4fd26791f3c.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "a0e6894b-499b-4520-ab44-1b922eb04b73.idx",
                        "size": 25050
                    },
                    {
                        "link": "input",
                        "name": "729a9c9e-f9aa-4bf5-a86e-42eb33dda258.txt",
                        "size": 16804
                    },
                    {
                        "link": "input",
                        "name": "25defbcb-bf68-4bf8-b467-261ee7bcff90.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "e21916ec-fe95-4e38-a41f-badc9770a3ac.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "d57d8229-ed49-42dd-969b-e8d7d85f8de5.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "9c22a252-5a4c-4338-9136-371475140061.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "2d069e50-f1d6-4fa3-8423-32bb01b07fc4.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "a512c49f-0d07-4301-9e3d-a928fa688dbc.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "67955c3c-0946-41f0-bb64-14f22a4440f9.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "4a8ac85c-7bf4-42cc-b6ec-628559525980.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "9a037cbf-8fbc-4caa-8f03-16ba65bb3184.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "2ad919ab-8a0c-4a97-9ab8-4e5d43806b8d.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "4418d3c0-6f5d-434f-9ee8-bbea57a24e47.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000028",
                "type": "compute",
                "runtime": 89.923,
                "parents": [
                    "haplotype_caller_00000016"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "99a11f54-bf8d-4295-9df2-323670e3be7d.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "9ccc743e-252e-400d-a38e-1932a9cffa8b.idx",
                        "size": 2844
                    },
                    {
                        "link": "input",
                        "name": "dde63515-ada7-4855-889b-3726c9e13c81.txt",
                        "size": 6181
                    },
                    {
                        "link": "input",
                        "name": "ad9f2cd9-0875-4921-b34e-df070c539ab1.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "f8c30ec6-af2b-433c-9e9b-dc9c22edafd0.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "ce3e9adb-5302-4176-b861-10f35ace0004.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "4834c7b5-e909-4e48-934f-35cc075ab0bd.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "bdb36fd3-e4eb-4a78-8fce-f674b0a8fbbd.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "cb823744-1f9a-40b2-a170-f1dcefae759d.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "4dc02b31-2d40-4b36-a141-a0e4efaad0c8.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "39ab68b0-279b-49da-8430-d4d33d095a60.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "a8f2463d-79d5-48ac-a285-d90025958af9.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "f87079c0-b1b7-4aa2-a2f2-6e7e7292f65b.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "62f6b4fc-126b-4fc8-94b9-7706361cf8a3.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000029",
                "type": "compute",
                "runtime": 185.44,
                "parents": [
                    "haplotype_caller_00000017"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "d0701ca2-ffa4-44c4-b82f-9958cc69b8c0.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "ce356a49-94c4-412e-a301-f562a0699eb1.idx",
                        "size": 27749
                    },
                    {
                        "link": "input",
                        "name": "b0b35f3d-cb56-4049-8c35-648c82a585f0.txt",
                        "size": 11436
                    },
                    {
                        "link": "input",
                        "name": "a6407a96-4531-4e44-b505-fc257efefb10.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "4fa06e01-074f-44cf-a8bd-9bf57a4b930c.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "b989da20-5533-44b6-bebe-fecac8af9e07.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "df7e9a98-b5fb-49c1-8e43-2544584a3282.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "d6b84326-78a2-48c5-a106-b07cc2f51398.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "7304b296-b348-4ee4-800a-4e436384bba6.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "9e99fbd2-9ff8-4a35-bffe-bbb3c7a3a2c4.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "af3beddd-2a83-4f91-97cc-9b0f6c9e10f6.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "9d494ba6-763b-4959-9841-ff7350248035.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "85ea2380-56d0-48bd-bbd1-d6488b9b075a.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "609e47fa-96cd-4583-9448-2e36320d0919.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "genotype_gvcfs_00000030",
                "type": "compute",
                "runtime": 784.441,
                "parents": [
                    "haplotype_caller_00000018"
                ],
                "children": [
                    "combine_variants_00000032"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "09985040-e599-4070-b702-ac96e10d4fdf.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "cdf4f8bc-8b11-40e2-857b-8dd01b4a191e.idx",
                        "size": 20874
                    },
                    {
                        "link": "input",
                        "name": "95f33226-e1a7-48c0-9721-706acfebf51b.txt",
                        "size": 8390
                    },
                    {
                        "link": "input",
                        "name": "58958676-5b32-4e75-82dc-acd8546df243.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "529027e1-3653-4eed-9c0f-79c641e3237b.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "1b911545-1d99-41a3-b958-2f85f9253814.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "9e992387-f581-4ff5-b075-585922a2c4c6.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "1014abe5-884c-4c9b-987b-b38f323141e3.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "73482520-a8ee-4bdf-85f2-aaf6f531bbdd.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "769ad192-71bd-466b-a346-f15b28c58f3c.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "0d2ccd91-b8ac-4286-979e-22d68378fd95.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "cc4e8be5-ede5-4a87-beec-998fdc34ac3c.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "00f8b977-d4d3-4ff3-ab6f-211a53027d4a.vcf",
                        "size": 83148
                    },
                    {
                        "link": "output",
                        "name": "1cb0b86c-047c-47ec-ae69-828cd1462525.idx",
                        "size": 28583
                    }
                ],
                "cores": 1
            },
            {
                "name": "merge_gcvf_00000031",
                "type": "compute",
                "runtime": 37721.938,
                "parents": [
                    "haplotype_caller_00000007",
                    "haplotype_caller_00000008",
                    "haplotype_caller_00000009",
                    "haplotype_caller_00000010",
                    "haplotype_caller_00000011",
                    "haplotype_caller_00000012",
                    "haplotype_caller_00000013",
                    "haplotype_caller_00000014",
                    "haplotype_caller_00000015",
                    "haplotype_caller_00000016",
                    "haplotype_caller_00000017",
                    "haplotype_caller_00000018"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "0ff2ab5c-a565-46f8-859e-198b749fb32d.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "3f66fb18-3c20-466a-bc75-e6a921782e1a.idx",
                        "size": 26170
                    },
                    {
                        "link": "input",
                        "name": "69bffa98-3393-4380-b74b-0b6bd2ebaa97.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "7a2289cc-2889-464b-a6a1-04b964d06974.idx",
                        "size": 19742
                    },
                    {
                        "link": "input",
                        "name": "f4a0ce41-ddab-4b4a-86be-f7aeb3141cf6.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "d273b1b8-8927-49b3-b828-19955933bbe3.idx",
                        "size": 29158
                    },
                    {
                        "link": "input",
                        "name": "07378df9-a3b4-47c3-b7ae-2b12e08ebf5f.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "b29893fe-577e-4b49-bfd6-91841bebec34.idx",
                        "size": 9699
                    },
                    {
                        "link": "input",
                        "name": "95357302-588d-494a-ad77-819da8051a03.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "72f65009-a974-4b32-b56e-b9a62f69e459.idx",
                        "size": 30384
                    },
                    {
                        "link": "input",
                        "name": "e8f8510e-d983-487d-a0ec-18ef23717961.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "1823aa69-e0d8-4bfb-8db9-17e80afa3b4d.idx",
                        "size": 19251
                    },
                    {
                        "link": "input",
                        "name": "267523bd-0b97-4975-9cc3-afcfa09edeaa.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "cbf005f8-a23e-41c7-b68f-f8e58c589e57.idx",
                        "size": 2844
                    },
                    {
                        "link": "input",
                        "name": "1851e3d3-4ff8-4ead-b152-fef1e3d47b00.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "d87e677b-bb6b-4d46-b16a-7567f7ce8967.idx",
                        "size": 8070
                    },
                    {
                        "link": "input",
                        "name": "1fc03564-bd5c-4060-a765-a4fd26791f3c.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "a0e6894b-499b-4520-ab44-1b922eb04b73.idx",
                        "size": 25050
                    },
                    {
                        "link": "input",
                        "name": "99a11f54-bf8d-4295-9df2-323670e3be7d.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "9ccc743e-252e-400d-a38e-1932a9cffa8b.idx",
                        "size": 2844
                    },
                    {
                        "link": "input",
                        "name": "d0701ca2-ffa4-44c4-b82f-9958cc69b8c0.vcf",
                        "size": 75727
                    },
                    {
                        "link": "input",
                        "name": "ce356a49-94c4-412e-a301-f562a0699eb1.idx",
                        "size": 27749
                    },
                    {
                        "link": "input",
                        "name": "09985040-e599-4070-b702-ac96e10d4fdf.vcf",
                        "size": 75728
                    },
                    {
                        "link": "input",
                        "name": "cdf4f8bc-8b11-40e2-857b-8dd01b4a191e.idx",
                        "size": 20874
                    },
                    {
                        "link": "input",
                        "name": "8e318408-bcbf-43a0-923e-209c03c0300a.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "f28db425-4173-4534-9c7d-50e4cd0c68af.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "60e17cd4-986d-4122-b2f7-b291fd06d09e.txt",
                        "size": 12293
                    },
                    {
                        "link": "input",
                        "name": "62a7fcf1-7439-407e-9e2b-9a6d1e83e826.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "a38779fc-a581-4a5e-bfab-e8086dd5b7b4.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "d98907af-c00e-40fb-b507-e7f39ffb8656.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "b3aca087-03ae-4f05-82fd-f5e49e5fbd3a.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "49b37903-8987-4e4b-838d-4d5f3b122dde.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "fa2dfe70-8f52-40c6-afb6-8d7eec9f94f6.list",
                        "size": 1700
                    },
                    {
                        "link": "input",
                        "name": "939795a9-da84-4cb5-b782-f9116eb3a32a.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "b0c45d7e-6ed2-4e8d-8554-859a5187542e.amb",
                        "size": 259156
                    },
                    {
                        "link": "output",
                        "name": "8730196e-2f49-4f96-a46a-1d021c6cb9c3.idx",
                        "size": 33258
                    },
                    {
                        "link": "output",
                        "name": "0e000d89-f2de-42af-b447-19b319d41b29.vcf",
                        "size": 25030
                    }
                ],
                "cores": 1
            },
            {
                "name": "combine_variants_00000032",
                "type": "compute",
                "runtime": 165.77,
                "parents": [
                    "genotype_gvcfs_00000019",
                    "genotype_gvcfs_00000020",
                    "genotype_gvcfs_00000021",
                    "genotype_gvcfs_00000022",
                    "genotype_gvcfs_00000023",
                    "genotype_gvcfs_00000024",
                    "genotype_gvcfs_00000025",
                    "genotype_gvcfs_00000026",
                    "genotype_gvcfs_00000027",
                    "genotype_gvcfs_00000028",
                    "genotype_gvcfs_00000029",
                    "genotype_gvcfs_00000030"
                ],
                "children": [
                    "select_variants_indel_00000033",
                    "select_variants_snp_00000034"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "2e6bc500-1455-4786-ba5c-b998b47cda23.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "8a0059b2-82e5-41b6-89bc-b50fa38affd0.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "8f24688f-09d8-4e72-b005-ef3079ba9f81.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "cf16d143-103f-40b9-aa5e-88421574d6d4.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "204629de-a4d5-4967-9f4d-49b06ce5b19f.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "5f89e97f-e750-431e-9049-4e518586664c.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "f96274cf-ded0-4220-a767-c82b9a54a55f.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "8621a87e-63a6-46e0-ba6e-68df4a75f175.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "700e48e2-68e0-44f6-b0f3-7321e66fbbda.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "cb1949d5-5e19-4264-a772-5132274734ac.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "3ae0dbe8-3716-453d-bb0d-203f291d778b.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "835d0737-f97a-4fd6-a305-21c14bf83f94.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "cdb2807c-c747-4aaa-94ae-cc9b36788937.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "c8fba1de-f238-4bd4-8c9d-253eaa4d6001.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "e1390b2b-4cd3-4679-9e4a-08bd67b935ee.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "56a22fb9-388c-474f-812c-65f520f1c694.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "2ad919ab-8a0c-4a97-9ab8-4e5d43806b8d.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "4418d3c0-6f5d-434f-9ee8-bbea57a24e47.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "f87079c0-b1b7-4aa2-a2f2-6e7e7292f65b.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "62f6b4fc-126b-4fc8-94b9-7706361cf8a3.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "85ea2380-56d0-48bd-bbd1-d6488b9b075a.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "609e47fa-96cd-4583-9448-2e36320d0919.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "00f8b977-d4d3-4ff3-ab6f-211a53027d4a.vcf",
                        "size": 83148
                    },
                    {
                        "link": "input",
                        "name": "1cb0b86c-047c-47ec-ae69-828cd1462525.idx",
                        "size": 28583
                    },
                    {
                        "link": "input",
                        "name": "b7bb151d-1ac8-4aad-bb6a-a449a7f2aa7e.txt",
                        "size": 15976
                    },
                    {
                        "link": "input",
                        "name": "5c042d27-0184-4eb1-9527-fd4fd4f4831a.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "75fba333-3f56-42fb-847a-94642fd3860c.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "52d57c79-e057-4f22-94fd-41774dd4f48e.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "a8e62e07-ba00-4009-add3-d04fe7d6b0ea.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "25a2186b-f2fa-40b1-a2f7-a7cb823791a7.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "4894959b-61a9-400a-b12c-838093e4b454.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "fa69e19d-37d6-4c83-b788-a13711f7d55b.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "8033b770-0f58-4698-bc4a-8ebff2438a29.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "64ba81a3-98b8-4276-b26e-ab1bc02e7d71.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "output",
                        "name": "47d9e3d6-2593-4d6a-bdd9-aaeb2fa9ebfa.vcf",
                        "size": 87691
                    },
                    {
                        "link": "output",
                        "name": "02db10cc-432a-4d49-8d21-60919e8f0243.idx",
                        "size": 28447
                    }
                ],
                "cores": 1
            },
            {
                "name": "select_variants_indel_00000033",
                "type": "compute",
                "runtime": 20.767,
                "parents": [
                    "combine_variants_00000032"
                ],
                "children": [
                    "filtering_indel_00000035"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "47d9e3d6-2593-4d6a-bdd9-aaeb2fa9ebfa.vcf",
                        "size": 87691
                    },
                    {
                        "link": "input",
                        "name": "02db10cc-432a-4d49-8d21-60919e8f0243.idx",
                        "size": 28447
                    },
                    {
                        "link": "input",
                        "name": "03b49bfe-3b33-4809-880a-37a78fcbc20c.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "a2810b2e-0628-49d9-b2cd-677464c9df67.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "18ff1d74-5d02-45d4-bdcd-eaf43a09c5af.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "77d9eda2-3680-442b-a7ae-a45ad4984fb6.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "a705f63d-b98b-4c8d-9e41-31fe26925ff0.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "a4b1cd40-1341-4c69-93d6-c1be5548cf24.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "59e7a436-a2a5-4f4e-84ac-2e8cd4d2e6cf.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "be76eea7-6cb1-4647-9a4a-f3eae6b8222f.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "16fbd182-a2a6-407d-991e-c4b46dcd2ae6.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "d666d08d-01bd-4f11-b002-08d33a9dee6d.txt",
                        "size": 1597
                    },
                    {
                        "link": "output",
                        "name": "6d30fb78-fc4f-4b1f-ad76-0f345510138a.vcf",
                        "size": 72593
                    }
                ],
                "cores": 1
            },
            {
                "name": "select_variants_snp_00000034",
                "type": "compute",
                "runtime": 197.477,
                "parents": [
                    "combine_variants_00000032"
                ],
                "children": [
                    "filtering_snp_00000036"
                ],
                "files": [
                    {
                        "link": "input",
                        "name": "47d9e3d6-2593-4d6a-bdd9-aaeb2fa9ebfa.vcf",
                        "size": 87691
                    },
                    {
                        "link": "input",
                        "name": "02db10cc-432a-4d49-8d21-60919e8f0243.idx",
                        "size": 28447
                    },
                    {
                        "link": "input",
                        "name": "ea8f6bbd-16c1-4c28-9687-de9a5afc19c7.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "a089e0a5-40b6-44b3-9608-7803cd66facf.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "1d1f8462-342f-4bcb-8675-49ad5558c0a4.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "e4a40867-89bc-4b5c-81fb-8333e72944f8.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "cfa531fd-112f-4860-8f28-218bd42b6000.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "3e9e03fb-b885-4bcc-9ff5-be8218ae24ef.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "f2bf6716-e1a2-48f1-86fd-1993be9b5568.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "8dd2467c-621c-4169-ad51-6095486d244d.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "df084ec3-38ad-4f3a-84e3-5bc9b176c254.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "3316faa1-975b-43ca-a644-074d95190704.txt",
                        "size": 15748
                    },
                    {
                        "link": "output",
                        "name": "c7d67453-ea2b-44e5-a262-f9e7912a4f22.vcf",
                        "size": 86551
                    }
                ],
                "cores": 1
            },
            {
                "name": "filtering_indel_00000035",
                "type": "compute",
                "runtime": 338.389,
                "parents": [
                    "select_variants_indel_00000033"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "6d30fb78-fc4f-4b1f-ad76-0f345510138a.vcf",
                        "size": 72593
                    },
                    {
                        "link": "input",
                        "name": "7cfe105f-354d-4d95-8e20-a13915c20cd2.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "5fd261fa-a6d6-4123-940d-8fe4b82da9ab.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "8c522334-7762-4df0-8214-3d653f417ea7.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "48a8d0d3-a5f1-46cc-9c6f-67f26ef712b2.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "8e24683a-fa08-4790-b6c3-ac3e2403dfa9.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "ec2f5ce0-c38d-43ad-8d72-1b55ab904ddc.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "dcc5a600-7bcb-49c4-8f3c-fa3fe34a5d34.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "708dc352-1e5a-43e6-8e14-a51db11c5730.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "91b21f14-7299-4bbd-8026-bb22947b726b.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "c09a326b-967a-4d71-8055-ba9f1e759344.txt",
                        "size": 15973
                    },
                    {
                        "link": "output",
                        "name": "d51dac4f-64f7-40c0-a441-fbfc2b5c993b.vcf",
                        "size": 75510
                    },
                    {
                        "link": "output",
                        "name": "fdf90743-d1cf-4ba3-85d8-d279dc4c8141.idx",
                        "size": 28576
                    }
                ],
                "cores": 1
            },
            {
                "name": "filtering_snp_00000036",
                "type": "compute",
                "runtime": 122.062,
                "parents": [
                    "select_variants_snp_00000034"
                ],
                "children": [],
                "files": [
                    {
                        "link": "input",
                        "name": "c7d67453-ea2b-44e5-a262-f9e7912a4f22.vcf",
                        "size": 86551
                    },
                    {
                        "link": "input",
                        "name": "164c2841-1733-4dbc-a72b-e91822dd983f.dict",
                        "size": 142561
                    },
                    {
                        "link": "input",
                        "name": "f2026a60-bf6b-4909-a7e7-dac08ebe699b.pac",
                        "size": 244623820
                    },
                    {
                        "link": "input",
                        "name": "693b62d4-50a7-44bf-b279-81f959b83bb6.fai",
                        "size": 41379
                    },
                    {
                        "link": "input",
                        "name": "629b9ae1-cfb3-4222-b7f4-d9ba6a2c9b64.sa",
                        "size": 489247688
                    },
                    {
                        "link": "input",
                        "name": "4cbd1678-8b00-4052-9430-833c3990f670.gz",
                        "size": 108988506
                    },
                    {
                        "link": "input",
                        "name": "1140e475-1ca1-4a4a-9212-d827890e7543.amb",
                        "size": 259156
                    },
                    {
                        "link": "input",
                        "name": "e140ab38-5363-4b85-aaa4-8d83026e8ea0.fa",
                        "size": 990744229
                    },
                    {
                        "link": "input",
                        "name": "e6255adc-0d0a-45e7-a571-d2c6c0503338.ann",
                        "size": 47448
                    },
                    {
                        "link": "input",
                        "name": "5512585f-1743-4b63-bbc4-4c2888ce75dd.bwt",
                        "size": 978495356
                    },
                    {
                        "link": "input",
                        "name": "f0e076e7-6ae4-4c59-a817-a8ca56ddb5c5.txt",
                        "size": 19091
                    },
                    {
                        "link": "output",
                        "name": "4a6c2cb1-dfad-4b53-9fa0-8f0e58eb5cec.vcf",
                        "size": 56077
                    },
                    {
                        "link": "output",
                        "name": "f605cc22-c388-453d-981a-4b16cea53aa9.idx",
                        "size": 28546
                    }
                ],
                "cores": 1
            }
        ],
        "machines": []
    }
}