import Volcanoes from "../models/Volcanoes.js";

const create = (volData, userId) => {
  Volcanoes.create({ ...volData, owner: userId });
};

const getAll =  (filter = {}) => {
  let queryVolcanoes =  Volcanoes.find();

  if (filter.name) {
    queryVolcanoes.find({name: {$regex: filter.name, $options:'i'}})
  }

  if (filter.volcanoType) {
    queryVolcanoes.find({volcanoType: filter.volcanoType})
  }
    
    
    
    return queryVolcanoes;


};

const getOne = (volId) => {
  return Volcanoes.findById(volId);
};

const edit = (volId, volData) => {
    return Volcanoes.findByIdAndUpdate(volId, volData)
}

const remove = (volcanoId) => {
  return  Volcanoes.findByIdAndDelete(volcanoId)
}

export default {
  getAll,
  create,
    getOne,
  edit,
  remove
};
