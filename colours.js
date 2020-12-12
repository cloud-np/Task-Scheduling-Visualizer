const colours = {
    '1000genome': {
        individuals: '#9bcfff',
        individuals_merge: '#bfc3ff',
        sifting: '#ffd895',
        mutations_overlap: '#ff958c',
        frequency: '#b1d39d'
    },
    cycles: {
        baseline_cycles: '#d4d6be',
        fertilizer_increase_cycles: '#c4c9f3',
        cycles: '#ffbfbf',
        cycles_output_summary: '#bfffbf',
        cycles_fertilizer_increase_output_parser: '#ffbfff',
        cycles_fertilizer_increase_output_summary: '#bfffff',
        cycles_plots: '#ffffbf'
    },
    epigenomics: {
        fastqSplit: '#d5d6be',
        filterContams: '#c4c9f3',
        sol2sanger: '#ffbfbf',
        fast2bfq: '#bfffbf',
        map: '#ffbfff',
        mapMerge: '#bfffff',
        chr21: '#ffffbf',
        pileup: '#a3ceb3'
    },
    montage: {
        mProjectPP: '#cccccc',
        mDiffFit: '#d6d7bf',
        mConcatFit: '#c4c9f3',
        mBgModel: '#ffbfbf',
        mBackground: '#bfffbf',
        mImgtbl: '#ffbfff',
        mAdd: '#bfffff',
        mViewer: '#ffffbf'
    },
    seismology: {
        sG1IterDecon: '#bfffbf',
        siftSTFByMisfit: '#ffffbf'
    },
    soykb: {
        alignment_to_reference: '#cccccc',
        sort_sam: '#d5d6be',
        dedup: '#c4c9f3',
        add_recplae: '#ffbfbf',
        realign_target_creator: '#bfffbf',
        indel_realign: '#ffbfff',
        haplotype_caller: '#bfffff',
        genotype_gvcfs: '#ffffc0',
        combine_variants: '#a3ceb3',
        merge_gvcfs: '#9cc5f1',
        select_variants_indel: '#999999',
        select_variants_snp: '#ff8080',
        filtering_indel: '#ffcda6',
        filtering_snp: '#9f88ad',
    }
}

const colorTasks = (tasks, workflowType) => {

    tasks = tasks.map(task => {
        let color = findColor(task.name, workflowType);
        return { ...task, fill: color }
    });
    return tasks;
}

const findColor = (taskName, workflowType) => {

    let color = null;
    let nameSeparated = taskName.split('_');
    nameSeparated.forEach(name => {

        // This line checks if the name variable exists in your object
        if (name in colours[`${workflowType}`]) 
            color = colours[`${workflowType}`][`${name}`];
    });

    if(color === null)
        throw `Couldn't find the correct color task.name = ${taskName}`;
    return color;
}

export default colorTasks;