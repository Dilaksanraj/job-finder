import axios from 'axios';
import { AppConst } from '../shared/App.const';
import { Job } from '../model/job.model';

export const getAllJobList = async (pageProps) => {

    try {
        const res = await axios.get(`${AppConst.baseUrl}jobs/searching?board_keys=${AppConst.board_key}&page=${pageProps.page}&limit=10&order_by=desc`,
            {
                headers: {
                    'X-API-Key': AppConst.api_key,
                },
            });

            if(res.data){
                return {
                    data:res.data?.data.jobs.map((i, index)=>new Job(i,index)),// map data with Job model
                    paginationProps: res.data.meta //get mete data for pagination
                }
            }
            else{
                return {
                    data:[],
                    paginationProps: [] //get mete data for pagination
                }
            }

    } catch (error) {
        console.log(error);
        throw error;
    }
};

